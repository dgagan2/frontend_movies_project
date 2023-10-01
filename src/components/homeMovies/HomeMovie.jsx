import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../features/movie/movieSlice'

const HomeMovie = () => {
  const { movies } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <>
      {movies && movies?.map((movie) => (
        <div key={movie._id}>
          <button>
            <img src={movie.posterPath} alt={`Poster pelicula ${movie.title}`} style={{ height: '230px' }} />
          </button>
        </div>
      ))}

    </>
  )
}

export default HomeMovie
