import React, { useEffect, useState } from 'react'
import './home.css'
import PremiereMovies from '../../components/premiere/PremiereMovies'
import BillboardMovies from '../../components/billboard/BillboardMovies'
import NavHeader from '../../components/header/Header'
import HomeMovie from '../../components/homeMovies/HomeMovie'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies, getMoviesBillboard, getMoviesPremiere } from '../../features/movie/movieSlice'
import { getFavoriteMovies } from '../../features/movie/favoriteMovieSlice'
import Spinner from '../../components/Spinner'
import { toast } from 'react-toastify'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, isError, message, isSucces } = useSelector((state) => state.movie)
  useState(() => {
    dispatch(getMoviesPremiere())
    dispatch(getMoviesBillboard())
    dispatch(getMovies())
    dispatch(getFavoriteMovies())
  }, [])
  useEffect(() => {
    if (isError) {
      toast.info(message.message || message)
    }
  }, [isError, message, isSucces])
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <NavHeader />
      <main className='container-home-movies gap-4'>
        <PremiereMovies />
        <article className='d-flex gap-3 flex-column'>
          <div className='container-carousel-billboard d-flex justify-content-center'>
            <BillboardMovies />
          </div>
          <div className='d-flex gap-4 flex-wrap justify-content-around'>
            <HomeMovie />
          </div>
        </article>
      </main>
    </>

  )
}

export default Home
