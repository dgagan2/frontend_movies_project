/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconFavoritesMovies from '../../assets/favorito.png'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoriteMovies } from '../../features/movie/favoriteMovieSlice'
import movieService from '../../features/movie/movieService'

const DropdownFavorites = () => {
  const [favorite, setFavorite] = useState([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFavoriteMovies())
  }, [])
  const { listFavoriteMovies } = useSelector((state) => state.favorite)

  useEffect(() => {
    if (listFavoriteMovies) {
      // Crear un arreglo de promesas para buscar películas por ID
      const fetchMovies = listFavoriteMovies.movies.map(movie => movieService.searchMoviesById(movie))

      // Usar Promise.all para esperar todas las promesas
      Promise.all(fetchMovies)
        .then(responses => {
          // Filtrar y agregar las películas que no están en el estado favorite
          const newMovies = responses.filter(response => !favorite.some(favMovie => favMovie._id === response._id))

          // Actualizar el estado favorite con las nuevas películas
          if (newMovies.length > 0) {
            console.log(newMovies)
            setFavorite(prevFavorite => [...prevFavorite, ...newMovies])
          }
        })
        .catch(error => {
          console.error(error)
        })
    }
  }, [listFavoriteMovies, favorite])

  return (
    <div className='dropdown' id='Container-dropdown-menu-favorites'>
      <button type='button' className='btn btn-link dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuFavorites' aria-expanded='false'>
        <img src={iconFavoritesMovies} alt='' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuFavorites'>
        {
          favorite && favorite.map((movie) => (
            <li key={movie?._id}>
              <Link to=''>
                <div className='container-favorite-movie'>
                  <img src={movie?.posterPath} alt='' className='image-favorite-movie' />
                  <div className='container-favorite-movie-data'>
                    <h4>{movie?.title}</h4>
                    <p>{movie?.movieDuration}</p>
                    <p>{movie?.releaseDate}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DropdownFavorites
