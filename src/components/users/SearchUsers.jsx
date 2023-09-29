/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect, useState } from 'react'
import './user.css'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { reset, userList, searchUserEmail, searchUserRole, searchUserState, deleteUser, searchUserID } from '../../features/user/userSlice'
import Spinner from '../Spinner'
import iconDeleteUser from '../../assets/iconDelete.png'
import iconEditUser from '../../assets/iconEdit.png'
import { modalOpen } from '../../features/modals/modalSlice'

const SearchUsers = () => {
  const [optionSearch, setOptionSearch] = useState('email')
  const [roleSelected, setRoleSelected] = useState('customer')
  const [stateSelected, setStateSelected] = useState('active')
  const [dataEmail, setDataEmail] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const limit = 10
  const skip = 0

  const { users, isLoading, isError, isSuccess, message } = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(userList({ limit, skip }))
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    dispatch(reset())
  }, [isError, message, dispatch, navigate])

  const optioneToRender = () => {
    if (optionSearch === 'email') {
      return <input type='text' className='form-control' name='txtEmail' id='txtEmail' onChange={(e) => { setDataEmail(e.target.value) }} />
    }
    if (optionSearch === 'role') {
      return (
              <select id='role' className='form-select' name='role' onChange={(e) => { setRoleSelected(e.target.value) }}>
                      <option value='customer'>Customer</option>
                      <option value='admin'>Admin</option>

              </select>
      )
    }
    if (optionSearch === 'state') {
      return (
              <select id='state' className='form-select' name='state' onChange={(e) => { setStateSelected(e.target.value) }}>
                      <option value='active'>Habilitado</option>
                      <option value='disabled'>Deshabilitado</option>
              </select>
      )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    switch (optionSearch) {
      case 'email':
        if (!dataEmail) {
          toast.error('Debe ingresar el correo a buscar')
        } else {
          dispatch(searchUserEmail(dataEmail))
        }
        break
      case 'role':
        dispatch(searchUserRole(roleSelected))
        break
      case 'state':
        dispatch(searchUserState(stateSelected))
        break
    }
  }

  const deleteUserById = (id) => {
    if (!id) {
      toast.error('Id vacio')
    } else {
      dispatch(deleteUser(id))
      dispatch(userList({ limit, skip }))
      toast.done('Usuario eliminado')
    }
  }
  const resetFields = () => {
    setOptionSearch('email')
    setRoleSelected('customer')
    setStateSelected('active')
    dispatch(userList({ limit, skip }))
  }

  const modalEditUser = (data) => {
    if (data.id) {
      dispatch(searchUserID(data.id))
      dispatch(modalOpen(data.id))
    } else {
      toast.error('Id vacio')
    }
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
     <article>
        <div className='container-form-search-user'>
            <form onSubmit={handleSubmit}>
                <div className='form-login d-flex flex-column gap-2'>
                <label className='form-label'>Seleccione un metodo de busqueda</label>
                <select id='search-options' className='form-select' name='search-options' onChange={(e) => { setOptionSearch(e.target.value) }}>
                <option value='email'>Correo</option>
                <option value='role'>Role</option>
                <option value='state'>Estado</option>
                </select>
                {optioneToRender()}
                <div className='d-flex gap-3'>
                <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }}>Buscar</button>
                <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { resetFields() }}>Borrar</button>
                </div>

                </div>

            </form>
        </div>
        <div className='container-list-users'>
          <div className='table-responsive'>
            <table className='table align-middle'>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Nombres</th>
                  <th>Apellidos</th>
                  <th>Roles</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((data) => (
                  <tr key={data?.id}>
                      <td>{data?.email}</td>
                      <td>{data?.fullName?.firstname}</td>
                      <td>{data?.fullName?.lastName}</td>
                      <td>{data?.role}</td>
                      <td>{data?.state}</td>
                      <td><button onClick={() => { modalEditUser(data) }}><img src={iconEditUser} alt='Editar Usuario' /></button></td>
                      <td><button onClick={() => { deleteUserById(data.id) }}><img src={iconDeleteUser} alt='Eliminar usuario' /></button></td>
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

export default SearchUsers
