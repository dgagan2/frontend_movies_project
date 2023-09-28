import React from 'react'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchUsers from '../../components/users/SearchUsers'
import NavHeader from '../../components/header/Header'

const Dashboard = () => {
  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>

        <MenuDashboard />

        <SearchUsers />

      </main>

    </>
  )
}

export default Dashboard
