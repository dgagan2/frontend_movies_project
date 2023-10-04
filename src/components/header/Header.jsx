/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import iconSearch from '../../assets/search.png'
import { Link, useNavigate } from 'react-router-dom'
import DropdownMenuUser from './DropdownMenuUser'
import DropdownFavorites from './DropdownFavorites'
import { useSelector, useDispatch } from 'react-redux'
import { searchHomeMovie } from '../../features/movie/movieSlice'
import { getGenreHeader } from '../../features/genres/genreSlice'

const NavHeader = () => {
  const { isSuccess, isSuccessUpdateGenre, genreHeader, message } = useSelector((state) => state.genre)
  const [movieToSearch, setMovieToSearch] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const limit = 6
  const skip = 0

  useEffect(() => {
    setTimeout(() => {
      dispatch(getGenreHeader({ skip, limit }))
    }, 100)
  }, [dispatch, isSuccessUpdateGenre, isSuccess, message])

  const search = (e, variable, value) => {
    e.preventDefault()

    if (value) {
      dispatch(searchHomeMovie({ [variable]: value }))
      navigate('/home/search')
    }
  }
  return (
    <header className='header-navbar'>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div className='container-fluid'>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <a href='/home' style={{ backgroundColor: 'transparent', borderStyle: 'none' }}>
            <img className='logo-navbar' alt='Oura movies logo' src={logo} />
          </a>

          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              {genreHeader && genreHeader.map((item) => (

                <li className='nav-item' key={item._id}>
                  <Link className='nav-link active' aria-current='page' onClick={(e) => { search(e, 'genre', item.name) }}>{item.name}</Link>
                </li>

              ))}
            </ul>
            <form className='d-flex' role='search' id='input-movie-search' onSubmit={(e) => { search(e, 'title', movieToSearch) }}>
              <input
                className='form-control me-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
                value={movieToSearch}
                onChange={(e) => { setMovieToSearch(e.target.value) }}
              />
              <button className='button-search'>
                <img src={iconSearch} alt='Icono busqueda de peliculas' />
              </button>
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
