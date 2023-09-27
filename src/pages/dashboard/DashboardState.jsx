import React from 'react'
import Header from '../../components/header/Header'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'

const DashboardState = () => {
  return (
    <>
      <Header />
      <main className='container-dashboard bg-light d-flex'>

        <MenuDashboard />

      </main>

    </>
  )
}

export default DashboardState
