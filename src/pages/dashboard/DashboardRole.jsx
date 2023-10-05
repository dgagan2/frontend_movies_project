import React from 'react'

import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchRole from '../../components/users/SearchRole'
import NavHeader from '../../components/header/Header'

const DashboardRole = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>

        <MenuDashboard />
        <SearchRole />
      </main>

    </>
  )
}

export default DashboardRole
