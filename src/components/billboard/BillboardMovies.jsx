/* eslint-disable react-hooks/exhaustive-deps */

import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieById, getMoviesBillboard } from '../../features/movie/movieSlice'
import './billboard.css'
import { useNavigate } from 'react-router-dom'

const BillboardMovies = () => {
  const { moviesBillboard } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const Details = (movie) => {
    dispatch(getMovieById(movie._id))
    navigate('/details')
  }
  return (

    <Carousel>
      {moviesBillboard && moviesBillboard.map((data) => (
        <div key={data._id}>
          <img src={data.postBackground} />
          <div className='legend p-5'>
            <h5>{data?.title}</h5>
            <p>{data?.overview}</p>
            <p>Genero: {data?.genre?.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
            </p>
            <button className='btn btn-primary btn-md' onClick={() => { Details(data) }}>Ver Pelicula</button>
          </div>
        </div>
      ))}

    </Carousel>

  )
}

export default BillboardMovies
