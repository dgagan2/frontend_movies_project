import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import NavHeader from '../../components/header/Header'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const Movie = () => {
  const { movieDetail, isLoading, message } = useSelector((state) => state.movie)

  useEffect(() => { toast.info(message.message || message) }, [message])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <NavHeader />
      <main>
        {movieDetail.map((movie) => (
          <section className='container-movie' key={movie?._id}>
            <article className='container-movie-details'>
              <img src={movie?.posterPath} alt={`Poster pelicula ${movie?.title}`} />
              <div className='conatiner-movie-description'>
                <div>
                  <h3>{movie?.title}</h3>
                  <div data-bs-spy='scroll' data-bs-target='#navbar-example3' data-bs-offset='0' tabIndex='0'>
                    <p>{movie?.overview}</p>
                  </div>
                </div>
                <footer>
                  {movie?.movieDuration && <p>{movie?.movieDuration}</p>}
                  {movie?.releaseDate && <p>{movie?.releaseDate}</p>}

                  <button>Ver mas tarde</button>
                </footer>
              </div>
            </article>
            <article>
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url={movie?.videoLink}
                  playing
                  controls
                  volume
                  playIcon
                />
              </div>
            </article>
            <article>
              {movie?.director && <p>Director: {movie?.director}</p>}
              {movie?.actors && <p>Actores: {movie?.actors}</p>}
              {movie?.genre && <p>Genero: {movie?.genre}</p>}
              {movie?.language && <p>Lenguaje: {movie?.language}</p>}
            </article>
          </section>

        ))}

      </main>
    </>
  )
}

export default Movie
