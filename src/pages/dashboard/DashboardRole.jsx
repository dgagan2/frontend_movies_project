import React from 'react'
import Header from '../../components/header/Header'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchRole from '../../components/users/SearchRole'

const DashboardRole = () => {
  return (
    <>
      <Header />
      <main className='container-dashboard bg-light d-flex'>

        <MenuDashboard />
        <SearchRole />
      </main>

    </>
  )
}

export default DashboardRole
