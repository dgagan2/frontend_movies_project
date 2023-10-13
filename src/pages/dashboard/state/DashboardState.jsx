import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import ModalRole from '../../../components/modal/ModalRole'
import ManagerState from '../../../components/state/ManagerState'
import ModalState from '../../../components/modal/ModalState'

const DashboardState = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard  bg-light d-flex'>
        <ModalState />
        <MenuDashboard />
        <ManagerState />
      </main>

    </>
  )
}

export default DashboardState
