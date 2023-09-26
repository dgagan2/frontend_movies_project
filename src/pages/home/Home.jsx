import React from 'react'
import Header from '../../components/header/Header'
import './home.css'
import PremiereMovies from '../../components/premiere/PremiereMovies'
import BillboardMovies from '../../components/billboard/BillboardMovies'
const Home = () => {
  return (
    <>
      <Header />
      <main className='container-home-movies'>
        <PremiereMovies />
        <article>
          <div>
            <BillboardMovies />
          </div>
          <div>
            <h1>top</h1>
          </div>
        </article>
      </main>
    </>

  )
}

export default Home
