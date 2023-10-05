import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import NavHeader from '../../components/header/Header'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import './movieDetails.css'
import { newFavoriteMovie } from '../../features/movie/favoriteMovieSlice'

const Movie = () => {
  const { movieDetail, isLoading, message, isError } = useSelector((state) => state.movie)
  const dispatch = useDispatch()
  useEffect(() => {
    if (message) {
      toast.info(message.message || message)
    }
    if (isError) {
      toast.error(message.message || message)
    }
  }, [isError, message])

  if (isLoading) {
    return <Spinner />
  }

  const addToList = (data) => {
    dispatch(newFavoriteMovie(data))
  }

  return (
    <>
      <NavHeader />
      <main className='d-flex  justify-content-center'>
        <section className='container-movie' key={movieDetail?._id}>
          <article className='p-4'>
            <div
              className='container-background-movie-description' style={{
                backgroundImage: `url(${movieDetail?.postBackground})`
              }}
            >
              <div className='container-movie-details-data d-flex gap-4 p-3'>
                <div className='container-movie-poster-details'>
                  <img src={movieDetail?.posterPath} alt={`Poster pelicula ${movieDetail?.title}`} id='movie-poster-details' />
                </div>

                <div className='conatiner-movie-description'>
                  <div>

                    <h3>{movieDetail?.title}</h3>
                    <p>{movieDetail?.overview}</p>

                  </div>
                  <footer>
                    {movieDetail?.releaseDate && <p>{movieDetail?.releaseDate}</p>}

                    <button className='btn btn-primary btn-md' onClick={() => { addToList(movieDetail) }}>Ver mas tarde</button>
                  </footer>
                </div>
              </div>
            </div>

          </article>
          <article className='film-video-container p-4'>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={movieDetail?.videoLink}
                width='100%'
                height='100%'
                controls
              />
            </div>
          </article>
          <article className='container-details-movie p-4'>
            {movieDetail?.director && <p>Director: {movieDetail?.director}</p>}
            {movieDetail?.actors?.length !== 0 ? <p>Actores: {movieDetail?.actors}</p> : ''}
            {movieDetail?.genre && <p>Genero: {movieDetail?.genre}</p>}
            {movieDetail?.language && <p>Lenguaje: {movieDetail?.language}</p>}
          </article>
        </section>

      </main>
    </>
  )
}

export default Movie
