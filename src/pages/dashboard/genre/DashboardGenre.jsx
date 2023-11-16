import React from 'react'
import NavHeader from '../../../components/header/Header'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import CrudGenre from '../../../components/genre/CrudGenre'
import ModalGenre from '../../../components/modal/ModalGenre'
const DashboardGenre = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>
        <ModalGenre />
        <MenuDashboard />
        <CrudGenre />
      </main>

    </>
  )
}

export default DashboardGenre
