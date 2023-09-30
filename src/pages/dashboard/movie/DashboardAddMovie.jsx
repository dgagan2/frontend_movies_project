import React from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import AddMovie from '../../../components/movie/AddMovie'

const DashboardAddMovie = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>
        <MenuDashboard />
        <AddMovie />
      </main>

    </>
  )
}

export default DashboardAddMovie
