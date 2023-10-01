import React from 'react'
import './home.css'
import PremiereMovies from '../../components/premiere/PremiereMovies'
import BillboardMovies from '../../components/billboard/BillboardMovies'
import NavHeader from '../../components/header/Header'
import HomeMovie from '../../components/homeMovies/HomeMovie'

const Home = () => {
  return (
    <>
      <NavHeader />
      <main className='container-home-movies gap-4'>
        <PremiereMovies />
        <article className='d-flex gap-3 flex-column'>
          <div className='container-carousel-billboard d-flex justify-content-center'>
            <BillboardMovies />
          </div>
          <div className='d-flex gap-4 flex-wrap'>
            <HomeMovie />
          </div>
        </article>
      </main>
    </>

  )
}

export default Home
