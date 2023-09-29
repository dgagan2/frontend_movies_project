import React from 'react'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchUsers from '../../components/users/SearchUsers'
import NavHeader from '../../components/header/Header'
import ModalUser from '../../components/modal/ModalUser'


const Dashboard = () => {

  return (
    <>
      <NavHeader />
      <main className='container-dashboard bg-light d-flex'>
        <ModalUser />
        <MenuDashboard />
       
        <SearchUsers />

      </main>

    </>
  )
}

export default Dashboard
