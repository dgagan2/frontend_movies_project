import React, { useEffect } from 'react'
import './premiere.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieById, getMoviesPremiere } from '../../features/movie/movieSlice'

import { useNavigate } from 'react-router-dom'
const PremiereMovies = () => {
  const { moviesPremiere } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(getMoviesPremiere())
  }, [])
  const Details = (movie) => {
    dispatch(getMovieById(movie._id))
    navigate('/prueba')
  }

  return (
    <>
      <article className='container-premiere-movies'>
        <ul className='d-flex gap-4 flex-wrap'>
          {moviesPremiere && moviesPremiere.map((data) => (
            <li key={data?._id}>
              <div className='container-premiere-images'>
                <button onClick={() => { Details(data) }}>
                  <img src={data?.posterPath} alt={`Poster de la pelicula ${data?.title}`} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default PremiereMovies
