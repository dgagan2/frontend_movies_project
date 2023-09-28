import React from 'react'

import './home.css'
import PremiereMovies from '../../components/premiere/PremiereMovies'
import BillboardMovies from '../../components/billboard/BillboardMovies'
import NavHeader from '../../components/header/Header'
const Home = () => {
  return (
    <>
      <NavHeader />
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
