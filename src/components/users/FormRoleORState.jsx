/* eslint-disable react/prop-types */
import iconSearch from '../../assets/iconoBuscar.png'

import { useEffect, useState } from 'react'
import TableRoleORState from './TableRoleORState'
import { useDispatch } from 'react-redux'
import { newRole, roleList, searchRoleByName } from '../../features/roles/roleSlice'
import { toast } from 'react-toastify'
import { newState, searchState, stateList } from '../../features/state/stateSlice'

const FormRoleORState = ({ nameModule }) => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  useEffect(() => {
    if (nameModule === 'Rol') {
      dispatch(roleList())
    }
    if (nameModule === 'Estado') {
      dispatch(stateList())
    }
  }, [])

  const search = (e) => {
    e.preventDefault()
    if (input) {
      if (nameModule === 'Rol') {
        dispatch(searchRoleByName(input))
      }
      if (nameModule === 'Estado') {
        dispatch(searchState(input))
      }
    } else {
      toast.error('Campo vacio')
    }
  }
  const add = () => {
    if (input) {
      if (nameModule === 'Rol') {
        dispatch(newRole({ name: input }))
      }
      if (nameModule === 'Estado') {
        dispatch(newState({ name: input }))
      }
    } else {
      toast.error(`Debe ingresar el nombre del ${nameModule}`)
    }
  }

  const resetBox = () => {
    setInput('')
  }

  return (
    <>
      <form onSubmit={(e) => { search(e) }}>
        <label className='form-label'>Nombre del {nameModule}</label>
        <div className='form-login d-flex flex-row gap-2'>
          <input type='text' className='form-control' name='name' id='name' onChange={(e) => { setInput(e.target.value) }} />
          <button className='button-form-search-role' type='submit'><img src={iconSearch} alt='icono de busqueda' /></button>
        </div>
      </form>
      <div className='d-flex gap-3 p-2'>
        <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { resetBox() }}>Borrar</button>
        <button className='w-50 btn btn-lg' type='action' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { add() }}>Agregar</button>
      </div>
      <TableRoleORState nameModule={nameModule} />
    </>
  )
}

export default FormRoleORState
