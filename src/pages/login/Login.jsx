import React from 'react'
import logo from '../../assets/logo.png'
import './login.css'
const Login = () => {
  return (
    <>
      <main className='login'>
        <article className='container-login'>
          <div className='container-logo'>
            <img src={logo} alt='' />
            <h1>Oura Movie</h1>
          </div>
          <form action='' className='form-floating'>

            <h3>Inicia Sesión</h3>
            <div className='form-login'>
              <label htmlFor=''>Usuario</label>
              <input type='text' className='form-control' />
              <label htmlFor=''>Contraseña</label>
              <input type='password' className='form-control' />
            </div>
            <div className='container-button-login'>
              <button className='w-100 btn btn-lg btn-primary'>Iniciar sesión</button>
            </div>

          </form>
          <b>¿Primera vez en Oura Movie?</b>
          <a href=''>Regístrese</a>
        </article>
      </main>
    </>
  )
}

export default Login
