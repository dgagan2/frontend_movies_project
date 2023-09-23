import React, { useState, useEffect } from 'react'

import './login.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import useForm from '../../hooks/useForms'
import validateFormLogin from './validateFormLogIn'

const Login = () => {
  const [errorsLogin, setErrorsLogin] = useState({})
  const sendData = () => {
    const newErros = validateFormLogin(input)
    setErrorsLogin(newErros)
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  }
  )

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
              <button className='w-100 btn btn-lg btn-primary'>Iniciar sesión</button>
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
