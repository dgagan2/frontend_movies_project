/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useState } from 'react'
import './user.css'
const SearchUsers = () => {
  const [optionSearch, setOptionSearch] = useState('email')
  const [roleSelected, setRoleSelected] = useState('customer')
  const [stateSelected, setStateSelected] = useState('active')
  const [dateEmail, setDataEmail] = useState('')

  const optioneToRender = () => {
    if (optionSearch === 'email') {
      return <input type='text' className='form-control' name='txtEmail' id='txtEmail' onChange={(e) => { setDataEmail(e.target.value) }} />
    }
    if (optionSearch === 'role') {
      return (
              <select id='role' className='form-select' name='role' onChange={(e) => { setRoleSelected(e.target.value) }}>
                      <option value='customer'>Usuario</option>
                      <option value='admin'>Administrador</option>

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
  }

  return (
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
                <button className='w-100 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }}>Buscar</button>

                </div>

            </form>
        </div>
        <div className='container-users'>
            <h1>Data user</h1>
        </div>
    </article>

  )
}

export default SearchUsers
