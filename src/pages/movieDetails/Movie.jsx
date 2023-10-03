import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import NavHeader from '../../components/header/Header'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import './movieDetails.css'

const Movie = () => {
  const { movieDetail, isLoading, message } = useSelector((state) => state.movie)

  useEffect(() => { toast.info(message.message || message) }, [message])

  if (isLoading) {
    return <Spinner />
  }
  console.log(movieDetail)
  return (
    <>
      <NavHeader />
      <main className='d-flex  justify-content-center'>
        <section className='container-movie' key={movieDetail?._id}>
          <article className='p-4'>
            <div
              className='container-movie-details' style={{
                backgroundImage: `url(${movieDetail?.postBackground})`
              }}
            >
              <div className='d-flex gap-4 p-3'>
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

                    <button>Ver mas tarde</button>
                  </footer>
                </div>
              </div>
            </div>

          </article>
          <article>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                url={movieDetail?.videoLink}
                controls
                volume
                playIcon
              />
            </div>
          </article>
          <article>
            {movieDetail?.director && <p>Director: {movieDetail?.director}</p>}
            {movieDetail?.actors && <p>Actores: {movieDetail?.actors}</p>}
            {movieDetail?.genre && <p>Genero: {movieDetail?.genre}</p>}
            {movieDetail?.language && <p>Lenguaje: {movieDetail?.language}</p>}
          </article>
        </section>

      </main>
    </>
  )
}

export default Movie
