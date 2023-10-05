/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import useForm from '../../hooks/useForms'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getGenres } from '../../features/genres/genreSlice'
import { modalClose, reset, updateMovie } from '../../features/movie/movieSlice'

const ModalMovie = () => {
  const sendData = () => {
    const data = {
      ...input,
      genre: genresCheck,
      language: languages,
      posterPath: poster,
      postBackground: backgroundImage,
      premiere: isPremiere,
      billboard: isBillboard
    }
    dispatch(updateMovie(data))
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)
  const [genresCheck, setCheckGenres] = useState([])
  const [languages, setLanguages] = useState([])
  const [poster, setPoster] = useState(null)
  const [backgroundImage, setBackgroungImage] = useState(null)
  const [isPremiere, setIsPremiere] = useState('')
  const [isBillboard, setIsBillboard] = useState('')
  useEffect(() => {
    dispatch(getGenres())
  }, [])
  const dispatch = useDispatch()
  const { movieUpdate, isOpen } = useSelector((state) => state.movie)
  const { genres } = useSelector((state) => state.genre)

  const Default = () => {
    setCheckGenres(movieUpdate.genre)
    setLanguages(movieUpdate.language)
    setIsBillboard(movieUpdate.billboard)
    setIsPremiere(movieUpdate.premiere)
    setInput({
      id: '' || movieUpdate._id,
      title: '' || movieUpdate.title,
      overview: '' || movieUpdate.overview,
      movieDuration: '' || movieUpdate.movieDuration,
      releaseDate: '' || movieUpdate.releaseDate,
      director: '' || movieUpdate.director,
      actors: '' || movieUpdate.actors,
      videoLink: '' || movieUpdate.videoLink
    })
  }

  const handleCheckChange = (event, set, variable) => {
    const { value } = event.target
    if (variable.includes(value)) {
      set(variable.filter(data => data !== value))
    } else {
      set([...variable, value])
    }
  }

  useEffect(() => {
    if (movieUpdate) {
      Default()
    }
  }, [movieUpdate])

  const exit = () => {
    dispatch(modalClose())
    dispatch(reset())
  }

  return (
    <>
      {isOpen
        ? (
          <article className={`modal ${isOpen ? 'is-open' : ''}`}>
            <div className='modal-dialog modal-dialog-scrollable'>
              <h3>Editar Pelicula</h3>
              <form className='needs-validation' onSubmit={handleSubmit}>
                <div className='row g-3'>
                  <div className='col-sm-12'>
                    <label htmlFor='title' className='form-label'>Titulo<span className='text-muted'>(Obligatorio)</span></label>
                    <input type='text' className='form-control' required minLength='2' id='title' value={input?.title} onChange={handleInputChange} name='title' />
                  </div>

                  <div className='col-sm-12'>
                    <label htmlFor='overview' className='form-label'>Descripción<span className='text-muted'>(Obligatorio)</span></label>
                    <textarea rows='10' cols='40' type='text' className='form-control' id='overview' value={input?.overview} onChange={handleInputChange} name='overview' />
                  </div>

                  <div className='col-sm-12'>
                    <h6>Seleccione los generos<span className='text-muted'>(Obligatorio)</span></h6>
                    {
                genres && genres.map((genre) => (
                  <div className='form-check' key={genre?._id}>
                    <input type='checkbox' checked={!!genresCheck.includes(genre?.name)} className='form-check-input' id={genre?.name} value={genre?.name} onChange={(e) => { handleCheckChange(e, setCheckGenres, genresCheck) }} />
                    <label className='form-check-label' htmlFor='comedia'>{genre?.name}</label>
                  </div>
                ))
              }
                  </div>

                  <div className='col-sm-12'>
                    <h6>Seleccione los lenguajes<span className='text-muted'>(Obligatorio)</span></h6>
                    <div className='form-check'>
                      <input type='checkbox' checked={!!languages.includes('español')} className='form-check-input' id='español' value='español' onChange={(e) => { handleCheckChange(e, setLanguages, languages) }} />
                      <label className='form-check-label' htmlFor='español'>Español</label>
                    </div>
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='movieDuration' className='form-label'>Duración de la pelicula</label>
                    <input type='text' id='movieDuration' value={input?.movieDuration} name='movieDuration' onChange={handleInputChange} required />
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='releaseDate' className='form-label'>Fecha de lanzamiento<span className='text-muted'>(Obligatorio)</span></label>
                    <input type='text' id='releaseDate' className='form-control' value={input?.releaseDate} name='releaseDate' onChange={handleInputChange} />
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='posterPath' className='form-label'>Imagen de póster<span className='text-muted'>(Obligatorio)</span></label>
                    <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='posterPath' onChange={(e) => { setPoster(e.target.files[0]) }} name='posterPath' />
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='postBackground' className='form-label'>Imagen de fondo<span className='text-muted'>(Obligatorio)</span></label>
                    <input type='file' className='form-control' accept='.png, .jpg, .jpeg' id='postBackground' onChange={(e) => { setBackgroungImage(e.target.files[0]) }} name='postBackground' />
                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='director' className='form-label'>Director</label>
                    <textarea
                      rows='4' cols='20'
                      type='text' className='form-control' id='director'
                      value={input?.director} onChange={handleInputChange} name='director'
                    />

                  </div>

                  <div className='col-sm-6'>
                    <label htmlFor='actors' className='form-label'>Actores</label>
                    <textarea
                      rows='4' cols='20'
                      type='text' className='form-control' id='actors'
                      value={input?.actors} onChange={handleInputChange} name='actors'
                    />

                  </div>

                  <div className='col-sm-12'>
                    <h6>La pelicula está en estreno</h6>
                    <div>
                      <input type='radio' defaultChecked={!!isPremiere} id='true' className='form-label' name='premiere' onClick={(e) => { setIsPremiere(true) }} />
                      <label htmlFor='true' className='form-label'>Si</label>
                    </div>
                    <div>
                      <input type='radio' defaultChecked={!isPremiere} id='false' className='form-label' name='premiere' onClick={(e) => { setIsPremiere(false) }} />
                      <label htmlFor='false' className='form-label'>No</label>
                    </div>
                  </div>

                  <div className='col-sm-12'>
                    <h6>La pelicula está en cartelera</h6>
                    <div>
                      <input type='radio' id='true-billboard' defaultChecked={!!isBillboard} className='form-label' name='billboard' onClick={(e) => { setIsBillboard(true) }} />
                      <label htmlFor='true-billboard' className='form-label'>Si</label>
                    </div>
                    <div>
                      <input type='radio' id='false-billboard' defaultChecked={!isBillboard} className='form-label' name='billboard' onClick={(e) => { setIsBillboard(false) }} />
                      <label htmlFor='false-billboard' className='form-label'>No</label>
                    </div>
                  </div>

                  <div className='col-sm-12'>
                    <label htmlFor='videoLink' className='form-label'>Enlace de reproducción</label>
                    <input type='text' className='form-control' placeholder='https://example.com' id='videoLink' value={input?.videoLink} onChange={handleInputChange} name='videoLink' />
                  </div>
                </div>

                <div className='container-button d-flex gap-4 mb-5'>
                  <button className='w-100 btn btn-primary btn-lg mt-5' type='submit' onSubmit={handleSubmit}>Guardar</button>
                  <Link className='w-100 btn btn-primary btn-lg mt-5' onClick={() => { exit() }}>Salir</Link>
                </div>

              </form>
            </div>

          </article>
          )
        : null}
    </>

  )
}

export default ModalMovie
