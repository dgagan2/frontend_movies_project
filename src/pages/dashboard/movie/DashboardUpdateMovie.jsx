import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import ManagerMovie from '../../../components/movie/ManagerMovie'

const DashboardUpdateMovie = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex flex-row'>
        <MenuDashboard />
        <ManagerMovie />
      </main>

    </>
  )
}

export default DashboardUpdateMovie
