import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import ManagerMovie from '../../../components/movie/ManagerMovie'
import ModalMovie from '../../../components/modal/ModalMovie'

const DashboardUpdateMovie = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex flex-row'>
        <ModalMovie />
        <MenuDashboard />
        <ManagerMovie />
      </main>

    </>
  )
}

export default DashboardUpdateMovie
