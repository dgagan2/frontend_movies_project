import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import iconDeleteUser from '../../assets/iconDelete.png'
import iconEditUser from '../../assets/iconEdit.png'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRole, roleList, newRole, reset, searchRoleByName } from '../../features/roles/roleSlice'
import { toast } from 'react-toastify'
import { modalOpen } from '../../features/modals/modalSlice'
import iconSearch from '../../assets/iconoBuscar.png'

const AddRole = () => {
  const [inputRole, setInputRole] = useState('')
  const dispatch = useDispatch()
  const { roles, isLoading, isError, isSuccess, message, isSuccessUpdateRole } = useSelector((state) => state.rol)
  const updateList = () => {
    dispatch(roleList())
  }
  useEffect(() => {
    updateList()
  }, [dispatch, isSuccessUpdateRole])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }

    if (isSuccess) {
      message && toast.success(message)
    }

    dispatch(reset())
  }, [isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  const addRole = () => {
    if (inputRole) {
      dispatch(newRole({ name: inputRole }))
      updateList()
    } else {
      toast.error('Debe ingresar el nombre del Rol')
    }
  }

  const Delete = (id) => {
    dispatch(deleteRole(id))
    setTimeout(() => {
      updateList()
    }, 600)
  }
  const editRole = (data) => {
    dispatch(modalOpen({ id: data._id, name: data.name }))
  }
  const searchRole = (e) => {
    e.preventDefault()
    if (inputRole) {
      dispatch(searchRoleByName(inputRole))
    } else {
      toast.error('Campo vacio')
    }
  }

  const resetBox = () => {
    setInputRole('')
    updateList()
  }
  return (
    <>
      <article>
        <div className='container-form-role'>
          <form onSubmit={(e) => { searchRole(e) }}>
            <label className='form-label'>Nombre del Rol</label>
            <div className='form-login d-flex flex-row gap-2'>
              <input type='text' className='form-control' name='name' id='name' onChange={(e) => { setInputRole(e.target.value) }} />
              <button className='button-form-search-role' type='submit'><img src={iconSearch} alt='icono de busqueda' /></button>
            </div>
          </form>
          <div className='d-flex gap-3 p-2'>
            <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { resetBox() }}>Borrar</button>
            <button className='w-50 btn btn-lg' type='action' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { addRole() }}>Agregar</button>
          </div>
        </div>
        <div className='container-role-list'>
          <div className='table-responsive'>
            <table className='table align-middle'>
              <thead>
                <tr>
                  <th>Nombre del Rol</th>
                </tr>
              </thead>
              <tbody>
                {roles?.map((data) => (
                  <tr key={data?._id}>
                    <td>{data?.name}</td>
                    <td><button onClick={() => { editRole(data) }}><img src={iconEditUser} alt='Editar Usuario' /></button></td>
                    <td><button onClick={() => { Delete(data._id) }}><img src={iconDeleteUser} alt='Eliminar usuario' /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </article>

    </>
  )
}

export default AddRole
