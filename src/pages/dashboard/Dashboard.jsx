import React from 'react'
import Header from '../../components/header/Header'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchUsers from '../../components/users/SearchUsers'

const Dashboard = () => {
  return (
    <>
      <Header />
      <main className='container-dashboard bg-light d-flex'>

        <MenuDashboard />
        <SearchUsers />
      </main>

    </>
  )
}

export default Dashboard
