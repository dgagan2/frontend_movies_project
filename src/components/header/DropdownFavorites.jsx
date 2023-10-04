/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconFavoritesMovies from '../../assets/favorito.png'
import { useDispatch, useSelector } from 'react-redux'
import { getFavoriteMovies } from '../../features/movie/favoriteMovieSlice'
import movieService from '../../features/movie/movieService'

const DropdownFavorites = () => {
  const [favorite, setFavorite] = useState([])
  const [listMovies, setListMovies] = useState([])

  const dispatch = useDispatch()

  const { listFavoriteMovies } = useSelector((state) => state.favorite)

  useEffect(() => {
    dispatch(getFavoriteMovies())
    if (listFavoriteMovies) {
      const consultMovie = async (movieId) => {
        // Verificar si la película ya está en el estado 'favorite' antes de consultarla
        const response = await movieService.searchMoviesById(movieId)
        setFavorite((prevFavorites) => [...prevFavorites, response])
      }

      listFavoriteMovies?.movies?.forEach((movieId) => {
        consultMovie(movieId)
      })
    }
  }, [listFavoriteMovies])

  useEffect(() => {
    const uniqueFavoriteMovies = Array.from(new Set(favorite.map(movie => movie._id))).map(id => favorite.find(movie => movie._id === id))
    setListMovies(uniqueFavoriteMovies)
  }, [favorite])

  return (
    <div className='dropdown' id='Container-dropdown-menu-favorites'>
      <button type='button' className='btn btn-link dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuFavorites' aria-expanded='false'>
        <img src={iconFavoritesMovies} alt='' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuFavorites'>
        {
          listMovies && listMovies?.map((movie) => (
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
