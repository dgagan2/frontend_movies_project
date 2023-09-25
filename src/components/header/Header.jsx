import React, { useEffect, useState } from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import iconSearch from '../../assets/search.png'
import { getAllCategories } from '../../features/categories/categoryService'
import { Link } from 'react-router-dom'

const Header = () => {
  const user = JSON.parse(sessionStorage.getItem('user'))
  const [categories, setCategories] = useState([])
  const handleCategories = async () => {
    const response = await getAllCategories()
    setCategories(response)
  }
  useEffect(() => {
    handleCategories()
  }, [])

  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid'>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarTogglerDemo02' aria-controls='navbarTogglerDemo02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <img className='logo-navbar' alt='Oura movies logo' src={logo} />
        <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            {categories.map((item, index) => (

              <li className='nav-item' key={categories[index]._id}>
                <Link className='nav-link active' aria-current='page' to=''>{categories[index].name}</Link>
              </li>
            ))}
          </ul>
          <form className='d-flex' role='search'>
            <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
            <button type='button' className='button-search'><img src={iconSearch} alt='Icono busqueda de peliculas' /></button>
          </form>

        </div>
        <div className='dropdown'>
          <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuUser' aria-expanded='false'>
            {user.name}
          </button>
          <ul className='dropdown-menu' aria-labelledby='dropdownMenuUser'>
            <li><Link className='dropdown-item' to=''>Dashboard</Link></li>
            <li><Link className='dropdown-item' to=''>Mi perfil</Link></li>
            <li><Link className='dropdown-item' to=''>Salir</Link></li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Header
