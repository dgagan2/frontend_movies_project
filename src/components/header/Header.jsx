/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import iconSearch from '../../assets/search.png'
import { Link } from 'react-router-dom'
import DropdownMenuUser from './DropdownMenuUser'
import DropdownFavorites from './DropdownFavorites'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { categoriesNavbar, reset } from '../../features/categories/categorySlice'

import Spinner from '../Spinner'

const NavHeader = () => {
  const { categories, isLoading, isError, isSuccess, message } = useSelector((state) => state.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoriesNavbar())
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    dispatch(reset())
  }, [isError, message, dispatch, isSuccess, categories])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <Link to='/home'>
            <img className='logo-navbar' alt='Oura movies logo' src={logo} />
          </Link>

          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {categories
                ? categories.map((item, index) => (
                  <li className='nav-item' key={categories[index]._id}>
                    <Link className='nav-link active' aria-current='page' to=''>{categories[index].name}</Link>
                  </li>
                ))
                : null}
            </ul>
            <form className='d-flex' role='search' id='input-movie-search'>
              <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
              <button type='button' className='button-search'><img src={iconSearch} alt='Icono busqueda de peliculas' /></button>
            </form>
            <div className='d-flex justify-content-around' id='container-dropdown-user-movies'>
              <DropdownFavorites />
              <DropdownMenuUser />
            </div>

          </div>

        </div>
      </nav>
    </header>

  )
}

export default NavHeader
