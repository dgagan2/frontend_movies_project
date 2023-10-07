import React from 'react'
import './premiere.css'
import { useSelector } from 'react-redux'

import HoverPlayMovie from '../HoverPlayMovie'
const PremiereMovies = () => {
  const { moviesPremiere } = useSelector((state) => state.movie)

  return (
    <>
      <article className='container-premiere-movies'>
        <ul className='d-flex gap-3 flex-wrap justify-content-around'>
          {moviesPremiere && moviesPremiere.map((data) => (
            <li key={data?._id}>
              <div className='container-premiere-images'>
                <HoverPlayMovie movie={data} />
              </div>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}

export default PremiereMovies
