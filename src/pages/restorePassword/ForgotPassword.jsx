import React, { useEffect, useState } from 'react'
import './forgot.css'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { changePassword, reset } from '../../features/auth/authSlice'
import useForm from '../../hooks/useForms'
import validateFormLogin from '../login/validateFormLogIn'
import Logo from '../../components/Logo'
import Spinner from '../../components/Spinner'
const ForgotPassword = () => {
  const [errors, setErrors] = useState({})

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    if (isSuccess) {
      toast.success('Contraseña Actualizada', { autoClose: 1000, hideProgressBar: false })
      setTimeout(() => {
        navigate('/')
      }, 100)
    }
    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const sendData = () => {
    const newErros = validateFormLogin(input)
    setErrors(newErros)
    if (Object.keys(newErros).length === 0) {
      dispatch(changePassword(input))
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })

  if (isLoading) {
    return <Spinner />
  }
  return (
    <main className='container-forgot-password'>
      <article className='container-form-forgot-password d-flex justify-content-center'>

        <form action='' className='form-floating d-flex flex-column align-items-center' onSubmit={handleSubmit}>
          <Logo />
          <h3>Recupera tu cuenta</h3>
          <div className='container-form-email'>
            <label htmlFor='email'>Ingresa tu correo electrónico</label>
            <input type='text' id='email' name='email' className='form-control' value={input.email} onChange={handleInputChange} />
            {errors.email && <span className='errores'>{errors.email}</span>}
          </div>
          <div className='container-form-password'>
            <label htmlFor='password'>Ingresa tu nueva contraseña</label>
            <input type='password' id='password' name='password' className='form-control' value={input.password} onChange={handleInputChange} />
            {errors.password && <span className='errores'>{errors.password}</span>}
          </div>
          <button className='w-75 btn btn-lg btn-primary'>Cambiar Contraseña</button>
          <Link to='/login'>Volver</Link>
        </form>
      </article>
    </main>
  )
}

export default ForgotPassword
