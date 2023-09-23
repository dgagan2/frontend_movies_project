import React from 'react'
import logo from '../../assets/logo.png'
import './signup.css'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <>
      <main className='container-sign-up'>
        <div className='container-logo'>
          <img src={logo} alt='' />
          <h1>Oura Movie</h1>
        </div>

        <div className='row g-5 d-flex justify-content-center mt-0'>
          <div className='col-md-7 col-lg-8'>
            <h3 className='mb-3 text-center'>Registrarte</h3>
            <form className='needs-validation'>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstName' className='form-label'>Nombres<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='text' className='form-control' id='firstName' value='' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>Apellidos<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='text' className='form-control' id='lastName' value='' />
                </div>

                <div className='col-sm-12'>
                  <label htmlFor='email' className='form-label'>Correo Electronico<span className='text-muted'>(Obligatorio)</span></label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input type='text' className='form-control' id='email' placeholder='you@example.com' />
                  </div>
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password-one' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='password' className='form-control' id='password-one' placeholder='numeros-caracteres-mayusculas(Ejemplo:&GwkBYZ3)' value='' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password-two' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='password' className='form-control' id='password-two' placeholder='numeros-caracteres-mayusculas(Ejemplo:&GwkBYZ3)' value='' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='age' className='form-label'>Edad<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='number' className='form-control' id='age' value='' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='phone-number' className='form-label'>Numero Celular<span className='text-muted'>(Optional)</span></label>
                  <input type='number' className='form-control' id='phone-number' value='' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='address' className='form-label'>Dirección de residencia <span className='text-muted'>(Optional)</span></label>
                  <input type='text' className='form-control' id='address' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='city' className='form-label'>Ciudad de residencia <span className='text-muted'>(Optional)</span></label>
                  <input type='text' className='form-control' id='city' />
                </div>
              </div>

              <div className='container-button d-flex'>
                <button className='w-100 btn btn-primary btn-lg mt-5' type='submit'>Registrarse</button>
                <Link className='w-100 btn btn-primary btn-lg mt-5' to='/'>Volver</Link>
              </div>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUp
