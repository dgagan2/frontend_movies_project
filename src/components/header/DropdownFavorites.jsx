import React from 'react'
import { Link } from 'react-router-dom'
import iconFavoritesMovies from '../../assets/favorito.png'

const DropdownFavorites = () => {
  return (
    <div className='dropdown' id='Container-dropdown-menu-favorites'>
      <button type='button' className='btn btn-link dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuFavorites' aria-expanded='false'>
        <img src={iconFavoritesMovies} alt='' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuFavorites'>
        <li>
          <Link to=''>
            <div className='container-favorite-movie'>
              <img src='https://es.web.img3.acsta.net/medias/nmedia/18/83/93/76/19782422.jpg' alt='' className='image-favorite-movie' />
              <div className='container-favorite-movie-data'>
                <h4>Title</h4>
                <p>duracion</p>
                <p>Año lanzamiento</p>
              </div>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default DropdownFavorites
