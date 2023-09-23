import React, { useState } from 'react'
import './forgot.css'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo'
import useForm from '../../hooks/useForms'
import validateFormLogin from '../login/validateFormLogIn'
const ForgotPassword = () => {
  const [errors, setErrors] = useState({})
  const sendData = () => {
    const newErros = validateFormLogin(input)
    setErrors(newErros)
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  }
  )
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
          <Link to='/'>Volver</Link>
        </form>
      </article>
    </main>
  )
}

export default ForgotPassword
