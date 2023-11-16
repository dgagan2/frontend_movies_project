/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import iconFavoritesMovies from '../../assets/favorito.png'
import { useDispatch, useSelector } from 'react-redux'
import movieService from '../../features/movie/movieService'
import { getMovieById } from '../../features/movie/movieSlice'

const DropdownFavorites = () => {
  const [favorite, setFavorite] = useState([])
  const [listMovies, setListMovies] = useState([])

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { listFavoriteMovies } = useSelector((state) => state.favorite)
  useEffect(() => {
    const uniqueFavoriteMovies = Array.from(new Set(favorite.map(movie => movie._id))).map(id => favorite.find(movie => movie._id === id))
    setListMovies(uniqueFavoriteMovies)
  }, [favorite])

  useEffect(() => {
    if (listFavoriteMovies) {
      listFavoriteMovies?.movies?.forEach(async (movieId) => {
        const response = await movieService.searchMoviesById(movieId)
        setFavorite((prevFavorites) => [...prevFavorites, response])
      })
    }
  }, [listFavoriteMovies])

  const Details = (movie) => {
    dispatch(getMovieById(movie))
    navigate('/details')
  }

  return (
    <div className='dropdown' id='Container-dropdown-menu-favorites'>
      <button type='button' className='btn btn-link dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuFavorites' aria-expanded='false'>
        <img src={iconFavoritesMovies} alt='' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuFavorites'>
        {
          listMovies && listMovies?.map((movie) => (
            <li key={movie?._id}>
              <button
                onClick={() => { Details(movie._id) }}
                style={{ border_style: 'none' }}
              >
                <div className='container-favorite-movie'>
                  <img src={movie?.posterPath} alt='' className='image-favorite-movie' />
                  <div className='container-favorite-movie-data'>
                    <h4>{movie?.title}</h4>
                    <p>{movie?.movieDuration}</p>
                    <p>{movie?.releaseDate}</p>
                  </div>
                </div>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DropdownFavorites
