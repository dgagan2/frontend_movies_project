/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesBillboard } from '../../features/movie/movieSlice'
import './billboard.css'

const BillboardMovies = () => {
  const { moviesBillboard } = useSelector((state) => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMoviesBillboard())
  }, [])

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
            <button className='w-150 btn btn-primary btn-lg'>Ver Pelicula</button>
          </div>
        </div>
      ))}

    </Carousel>

  )
}

export default BillboardMovies
