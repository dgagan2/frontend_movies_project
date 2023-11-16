/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import iconLike from '../assets/like.png'
import { useSelector, useDispatch } from 'react-redux'

import { getLike, newLike } from '../features/movie/likeSlice'
const Like = ({ id }) => {
  const { isLike } = useSelector((state) => state.likeMovie)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLike(id))
  }, [])
  const addLike = () => {
    dispatch(newLike(id))
  }
  return (
    <button className={`button-like-movie ${isLike ? 'islike' : ''}`} onClick={() => { addLike() }}>
      <img src={iconLike} alt='icono para dar me gusta a una pelicula' />
    </button>
  )
}

export default Like
