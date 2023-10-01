import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'

const DashboardUpdateMovie = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>
        <MenuDashboard />

      </main>

    </>
  )
}

export default DashboardUpdateMovie