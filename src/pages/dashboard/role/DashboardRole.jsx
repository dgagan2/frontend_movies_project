import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import AddRole from '../../../components/role/AddRole'

const DashboardRole = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard  bg-light d-flex'>
        <MenuDashboard />
        <AddRole />
      </main>

    </>
  )
}

export default DashboardRole
