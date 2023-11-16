import React from 'react'
import { useSelector } from 'react-redux'
import HoverPlayMovie from '../HoverPlayMovie'
import '../premiere/premiere.css'

const HomeMovie = () => {
  const { movies } = useSelector((state) => state.movie)

  return (
    <>
      {movies && movies?.map((movie) => (
        <div key={movie._id} className='container-list-movies-home'>
          <HoverPlayMovie movie={movie} />
        </div>
      ))}

    </>
  )
}

export default HomeMovie
