import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForms'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset, modalOpen } from '../../features/movie/movieSlice'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'
import iconSearch from '../../assets/iconoBuscar.png'
import './managerMovie.css'
import iconEdit from '../../assets/iconEditMovie.png'
import iconDelete from '../../assets/iconDelete.png'

const ManagerMovie = () => {
  const { isError, isSuccess, isLoading, message, movieManager } = useSelector((state) => state.movie)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    if (isSuccess) {
      toast.success(message.message || message)
    }
    dispatch(reset())
  }, [message, isSuccess, isError, dispatch])

  const updateMovie = (data) => {
    dispatch(modalOpen(data))
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <section className='container-manager-movie d-flex'>
        <header className='container-form-movie-manager'>
          <div>
            <form action='' className='form-movie-manager'>
              <label htmlFor='title' className='form-label'>
                Ingrese el nombre de la pelicula
              </label>
              <div className='form-login d-flex flex-row gap-2'>
                <input type='text' className='form-control' name='title' id='title' onChange={(e) => { setInput(e.target.value) }} />
                <button className='button-form-search-role' type='submit'><img src={iconSearch} alt='icono de busqueda' /></button>
              </div>
            </form>
          </div>
        </header>

        <article className='container-list-manager-movie'>
          {movieManager && movieManager.map((movie) => (
            <article key={movie._id}>
              <div>
                <button className='btn-edit-movie' onClick={() => { updateMovie(movie) }}><img src={iconEdit} alt='' /></button>
                <button className='btn-delete-movie'><img src={iconDelete} alt='' /></button>
                <img src={movie?.posterPath} alt='' className='image-poster' />
              </div>
              <title>{movie?.title}</title>
            </article>
          ))}
        </article>
      </section>

    </>

  )
}

export default ManagerMovie
