/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import iconDeleteUser from '../../assets/iconDelete.png'
import iconEditUser from '../../assets/iconEdit.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRole } from '../../features/roles/roleSlice'
import { modalOpen } from '../../features/modals/modalSlice'
import { deleteState, modalOpenState } from '../../features/state/stateSlice'

const TableRoleORState = ({ nameModule }) => {
  const { roles } = useSelector((state) => state.rol)
  const { states } = useSelector((state) => state.state)
  const [dataToRender, setDataToRender] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    if (nameModule === 'Rol') {
      console.log('entro')
      setDataToRender(roles)
    }
    if (nameModule === 'Estado') {
      setDataToRender(states)
    }
  }, [nameModule, roles, states])

  const Delete = (id) => {
    if (nameModule === 'Rol') {
      dispatch(deleteRole(id))
    }
    if (nameModule === 'Estado') {
      dispatch(deleteState(id))
    }
  }
  const edit = (data) => {
    if (nameModule === 'Rol') {
      dispatch(modalOpen({ id: data._id, name: data.name }))
    }
    if (nameModule === 'Estado') {
      dispatch(modalOpenState({ id: data._id, name: data.name }))
    }
  }

  return (
    <div className='container-role-list'>
      <div className='table-responsive'>
        <table className='table align-middle'>
          <thead>
            <tr>
              <th>Nombre del {nameModule}</th>
            </tr>
          </thead>
          <tbody>
            {dataToRender?.map((data) => (
              <tr key={data?._id}>
                <td>{data?.name}</td>
                <td><button onClick={() => { edit(data) }}><img src={iconEditUser} alt='Editar Usuario' /></button></td>
                <td><button onClick={() => { Delete(data._id) }}><img src={iconDeleteUser} alt='Eliminar usuario' /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TableRoleORState
