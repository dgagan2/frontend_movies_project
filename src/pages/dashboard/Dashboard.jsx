import React from 'react'
import MenuDashboard from '../../components/menuDashboard/MenuDashboard'
import SearchUsers from '../../components/users/SearchUsers'
import NavHeader from '../../components/header/Header'
import ModalUser from '../../components/modal/ModalUser'
import { useSelector } from 'react-redux'
import './dashboard.css'

const Dashboard = () => {
  const { isOpen } = useSelector((state) => state.modalReduce)
  return (
    <>
      <NavHeader />
      <main className={`container-dashboard ${isOpen ? 'modal-active' : ''} bg-light d-flex`}>
        <ModalUser />
        <MenuDashboard />

        <SearchUsers />

      </main>

    </>
  )
}

export default Dashboard
