import React, { useEffect } from 'react'
import MenuDashboard from '../../../components/menuDashboard/MenuDashboard'
import NavHeader from '../../../components/header/Header'
import '../dashboard.css'
import AddMovie from '../../../components/movie/AddMovie'

import { useDispatch } from 'react-redux'
import { getGenres } from '../../../features/genres/genreSlice'
const DashboardAddMovie = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGenres())
  }, [])
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
