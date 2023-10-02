import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForms'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { reset, newMovie } from '../../features/movie/movieSlice'
import Spinner from '../Spinner'
import { toast } from 'react-toastify'
import validateForm from './validateForm'

const ModalMovie = () => {
  const [genresCheck, setCheckGenres] = useState([])
  const [languages, setLanguages] = useState([])
  const [poster, setPoster] = useState(null)
  const [backgroundImage, setBackgroungImage] = useState(null)

  const dispatch = useDispatch()
  const { isError, isSuccess, isLoading, message, movieUpdate, isOpen } = useSelector((state) => state.movie)
  const { genres } = useSelector((state) => state.genres)

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    if (isSuccess) {
      toast.success(message.message || message)
    }
    dispatch(reset())
  }, [message, isSuccess, isError, dispatch])

  const sendData = () => {

  }
  const handleChangeGenre = (event) => {
    const { value } = event.target
    if (genresCheck.includes(value)) {
      setCheckGenres(genresCheck.filter(genre => genre !== value))
    } else {
      setCheckGenres([...genres, value])
    }
  }
  const handleChangeLanguage = (event) => {
    const { value } = event.target
    if (languages.includes(value)) {
      setLanguages(languages.filter(data => data !== value))
    } else {
      setLanguages([...languages, value])
    }
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)
  useEffect(() => {
    if (movieUpdate) {
      setInput({
        id: movieUpdate._id,
        title: movieUpdate.title,
        overview: movieUpdate.overview,
        movieDuration: movieUpdate.movieDuration,
        releaseDate: movieUpdate.releaseDate,
        director: movieUpdate.director,
        actors: movieUpdate.actors,
        premiere: movieUpdate.premiere,
        billboard: movieUpdate.billboard,
        videoLink: movieUpdate.videoLink
      })
      setCheckGenres(genres.genre)
      setLanguages(genres.language)
    }
  }, [movieUpdate])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <h3>Editar Pelicula</h3>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className='row g-3'>
            <div className='col-sm-12'>
              <label htmlFor='title' className='form-label'>Titulo<span className='text-muted'>(Obligatorio)</span></label>
              <input type='text' className='form-control' required minLength='2' id='title' value={input.title} onChange={handleInputChange} name='title' />
            </div>

            <div className='col-sm-12'>
              <label htmlFor='overview' className='form-label'>Descripción<span className='text-muted'>(Obligatorio)</span></label>
              <textarea rows='10' cols='40' type='text' className='form-control' id='overview' value={input.overview} onChange={handleInputChange} name='overview' />
            </div>

            <div className='col-sm-12'>
              <h6>Seleccione los generos<span className='text-muted'>(Obligatorio)</span></h6>
              {
                genres && genres.map((genre) => (
                  <div className='form-check' key={genre._id}>
                    <input type='checkbox' checked={!!genresCheck.includes(genre.name)} className='form-check-input' id={genre.name} value={genre.name} onChange={(e) => { handleChangeGenre(e) }} />
                    <label className='form-check-label' htmlFor='comedia'>Comedia</label>
                  </div>
                ))
              }
            </div>

            <div className='col-sm-12'>
              <h6>Seleccione los lenguajes<span className='text-muted'>(Obligatorio)</span></h6>
              <div className='form-check'>
                <input type='checkbox' checked={!!languages.includes('español')} className='form-check-input' id='español' value='español' onChange={(e) => { handleChangeLanguage(e) }} />
                <label className='form-check-label' htmlFor='español'>Español</label>
              </div>
            </div>

            <div className='col-sm-6'>
              <label htmlFor='movieDuration' className='form-label'>Duración de la pelicula</label>
              <input type='time' id='movieDuration' className='form-control' max='04:00:00' name='movieDuration' onChange={handleInputChange} required />
            </div>

            <div className='col-sm-6'>
              <label htmlFor='releaseDate' className='form-label'>Fecha de lanzamiento<span className='text-muted'>(Obligatorio)</span></label>
              <input type='date' id='releaseDate' className='form-control' name='releaseDate' onChange={handleInputChange} />
            </div>

            <div className='col-sm-6'>
              <label htmlFor='posterPath' className='form-label'>Imagen de póster<span className='text-muted'>(Obligatorio)</span></label>
              <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='posterPath' value={input.posterPath} onChange={(e) => { setPoster(e.target.files[0]) }} name='posterPath' />
            </div>

            <div className='col-sm-6'>
              <label htmlFor='postBackground' className='form-label'>Imagen de fondo<span className='text-muted'>(Obligatorio)</span></label>
              <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='postBackground' value={input.postBackground} onChange={(e) => { setBackgroungImage(e.target.files[0]) }} name='postBackground' />
            </div>

            <div className='col-sm-6'>
              <label htmlFor='director' className='form-label'>Director</label>
              <textarea
                rows='4' cols='20'
                type='text' className='form-control' id='director'
                value={input.director} onChange={handleInputChange} name='director'
              />

            </div>

            <div className='col-sm-6'>
              <label htmlFor='actors' className='form-label'>Actores</label>
              <textarea
                rows='4' cols='20'
                type='text' className='form-control' id='actors'
                value={input.actors} onChange={handleInputChange} name='actors'
              />

            </div>

            <div className='col-sm-12'>
              <h6>La pelicula está en estreno</h6>
              <div>
                <input type='radio' id='true' className='form-label' name='premiere' value='true' onClick={handleInputChange} />
                <label htmlFor='true' className='form-label'>Si</label>
              </div>
              <div>
                <input type='radio' id='false' className='form-label' name='premiere' value='false' onClick={handleInputChange} />
                <label htmlFor='false' className='form-label'>No</label>
              </div>
            </div>

            <div className='col-sm-12'>
              <h6>La pelicula está en cartelera</h6>
              <div>
                <input type='radio' id='true-billboard' className='form-label' name='billboard' value='true' onClick={handleInputChange} />
                <label htmlFor='true-billboard' className='form-label'>Si</label>
              </div>
              <div>
                <input type='radio' id='false-billboard' className='form-label' name='billboard' value='false' onClick={handleInputChange} />
                <label htmlFor='false-billboard' className='form-label'>No</label>
              </div>
            </div>

            <div className='col-sm-12'>
              <label htmlFor='videoLink' className='form-label'>Enlace de reproducción</label>
              <input type='text' className='form-control' placeholder='https://example.com' id='videoLink' value={input.videoLink} onChange={handleInputChange} name='videoLink' />
            </div>
          </div>

          <div className='container-button d-flex gap-4'>
            <button className='w-100 btn btn-primary btn-lg mt-5' type='submit' onSubmit={handleSubmit}>Agregar</button>
            <Link className='w-100 btn btn-primary btn-lg mt-5' onClick={() => { clearFields() }}>Borrar</Link>
          </div>

        </form>
      </div>

    </article>
  )
}

export default ModalMovie
