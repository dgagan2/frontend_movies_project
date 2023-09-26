import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import useForm from '../../hooks/useForms'
import validateFormLogin from './validateFormLogIn'
import Spinner from '../../components/Spinner'

const Login = () => {
  const [errorsLogin, setErrorsLogin] = useState({})

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }
    if (isSuccess || user) {
      navigate('/home')
    }

    dispatch(reset())
  }, [isError, message, dispatch, user, isSuccess, navigate])

  const sendData = () => {
    const newErros = validateFormLogin(input)
    setErrorsLogin(newErros)
    if (Object.keys(newErros).length === 0) {
      dispatch(login(input))
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  }
  )
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <main className='login'>
        <article className='container-login'>
          <Logo />
          <form className='form-floating' onSubmit={handleSubmit}>

            <h2 className='text-center'>Inicia Sesión</h2>
            <div className='form-login d-flex flex-column gap-2'>
              <label htmlFor='email'>Usuario</label>
              <input type='text' id='email' name='email' className='form-control' value={input.email} onChange={handleInputChange} />
              {errorsLogin.email && <p className='errores'>{errorsLogin.email}</p>}
              <label htmlFor='password'>Contraseña</label>
              <input type='password' id='password' name='password' className='form-control' value={input.password} onChange={handleInputChange} />
              {errorsLogin.password && <span className='errores'>{errorsLogin.password}</span>}
            </div>
            <div className='container-button-login'>
              <button className='w-100 btn btn-lg btn-primary' type='submit' onSubmit={handleSubmit}>Iniciar sesión</button>
            </div>

          </form>
          <b>¿Primera vez en Oura Movie?</b>
          <Link to='/account/registration'>Regístrese</Link>
          <Link to='/account/forgotpassword'>¿Olvidaste tu contraseña?</Link>
        </article>
      </main>
    </>
  )
}

export default Login
