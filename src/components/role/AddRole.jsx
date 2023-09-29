import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner'
import iconDeleteUser from '../../assets/iconDelete.png'
import iconEditUser from '../../assets/iconEdit.png'
import { useSelector, useDispatch } from 'react-redux'
import { deleteRole, updateRole, roleList, newRole, reset } from '../../features/roles/roleSlice'
import { toast } from 'react-toastify'
const AddRole = () => {
  const [role, setRole] = useState('')
  const dispatch = useDispatch()
  const { roles, isLoading, isError, isSuccess, message } = useSelector((state) => state.rol)
  useEffect(() => {
    dispatch(roleList())
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }

    if (isSuccess) {
      toast.success(message)
    }

    dispatch(reset())
  }, [isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  const addRole = (e) => {
    e.preventDefault()
    if (role) {
      dispatch(newRole({ name: role }))
    } else {
      toast.error('Debe ingresar el nombre del Rol')
    }
  }

  const Delete = (id) => {
    dispatch(deleteRole(id))
  }
  const editRole = (data) => {
    dispatch(updateRole(data))
  }
  return (
    <>
      <article>
        <div className='container-form-role'>
          <form onSubmit={(e) => { addRole(e) }}>
            <div className='form-login d-flex flex-column gap-2'>
              <label className='form-label'>Nombre del Rol</label>
              <input type='text' className='form-control' name='name' id='name' onChange={(e) => { setRole(e.target.value) }} />
              <div className='d-flex gap-3'>
                <button className='w-50 btn btn-lg' type='action' style={{ backgroundColor: '#10104e', color: 'white' }}>Buscar</button>
                <button className='w-50 btn btn-lg' type='action' style={{ backgroundColor: '#10104e', color: 'white' }}>Agregar</button>
              </div>
            </div>
          </form>
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
                  <tr key={data?.id}>
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
