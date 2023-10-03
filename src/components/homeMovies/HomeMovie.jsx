import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieById, getMovies } from '../../features/movie/movieSlice'
import { useNavigate } from 'react-router-dom'

const HomeMovie = () => {
  const { movies } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMovies())
  }, [])
  const Details = (movie) => {
    dispatch(getMovieById(movie._id))
    navigate('/prueba')
  }
  return (
    <>
      {movies && movies?.map((movie) => (
        <div key={movie._id} className='container-list-movies-home'>
          <button onClick={() => { Details(movie) }}>
            <img src={movie.posterPath} alt={`Poster pelicula ${movie.title}`} />
          </button>
        </div>
      ))}

    </>
  )
}

export default HomeMovie
