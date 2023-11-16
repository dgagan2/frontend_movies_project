/* eslint-disable no-var */
/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux'
import iconPlay from '../assets/play.png'
import { getMovieById } from '../features/movie/movieSlice'
import './premiere/premiere.css'
import { useNavigate } from 'react-router-dom'
const HoverPlayMovie = ({ movie }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if (movie) {
    var { _id, posterPath, title } = movie
  }

  const Details = () => {
    dispatch(getMovieById(_id))
    navigate('/details')
  }
  return (
    <>
      {movie
        ? (
          <button onClick={() => { Details() }} className='btn-premiere-image'>
            <img src={iconPlay} alt='icono de reproducción' className='icon-play-premiere-movie' />
            <img src={posterPath} alt={`Poster pelicula ${title}`} />
          </button>
          )
        : ''}
    </>

  )
}

export default HoverPlayMovie
