import React, { useEffect } from 'react'
import HomeMovie from '../../../components/homeMovies/HomeMovie'
import NavHeader from '../../../components/header/Header'
import Spinner from '../../../components/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { reset } from '../../../features/movie/movieSlice'

const MovieSearch = () => {
  const { isLoading, isError, message } = useSelector((state) => state.movie)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (message) {
      navigate('/home')
    }
    dispatch(reset())
  }, [isError, message])
  console.log(isLoading)
  return (
    <>
      {isLoading
        ? <Spinner />
        : (
          <>
            <NavHeader />
            <HomeMovie />
          </>

          )}
    </>

  )
}

export default MovieSearch
