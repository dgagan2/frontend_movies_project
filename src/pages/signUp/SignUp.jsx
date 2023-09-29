import './signup.css'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForms'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import validateForm from './validateFormSingUp'
import Logo from '../../components/Logo'
import Spinner from '../../components/Spinner'

const SignUp = () => {
  const [errorsRegitrerUser, setErrorsRegitrerUser] = useState({})

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }

    if (isSuccess || user) {
      toast.success('Usuario creado', { autoClose: 1000, hideProgressBar: false })
      setTimeout(() => {
        navigate('/login')
      }, 100)
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const sendData = () => {
    const newErros = validateForm(input)
    setErrorsRegitrerUser(newErros)
    if (Object.keys(newErros).length === 0) {
      dispatch(register(input))
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: '',
    password_two: '',
    firstname: '',
    lastName: '',
    age: '',
    phoneNumber: '',
    street: '',
    city: ''
  })

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      <main className='container-sign-up'>
        <Logo />
        <div className='row g-5 d-flex justify-content-center'>
          <div className='col-md-7 col-lg-8'>
            <h3 className='mb-3 text-center'>Registrarte</h3>
            <form className='needs-validation' onSubmit={handleSubmit}>
              <div className='row g-3'>
                <div className='col-sm-6'>
                  <label htmlFor='firstname' className='form-label'>Nombres<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='text' className='form-control' id='firstname' value={input.firstname} onChange={handleInputChange} name='firstname' />
                  {errorsRegitrerUser.firstname && <p className='errores'>{errorsRegitrerUser.firstname}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='lastName' className='form-label'>Apellidos<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='text' className='form-control' id='lastName' value={input.lastName} onChange={handleInputChange} name='lastName' />
                  {errorsRegitrerUser.lastName && <p className='errores'>{errorsRegitrerUser.lastName}</p>}
                </div>

                <div className='col-sm-12'>
                  <label htmlFor='email' className='form-label'>Correo Electronico<span className='text-muted'>(Obligatorio)</span></label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>@</span>
                    <input
                      type='text' className='form-control' id='email' placeholder='you@example.com'
                      value={input.email} onChange={handleInputChange} name='email'
                    />
                  </div>
                  {errorsRegitrerUser.email && <p className='errores'>{errorsRegitrerUser.email}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input
                    type='password' className='form-control' id='password' placeholder='&GwkBYZ3-numeros-caracteres-mayusculas'
                    value={input.password} onChange={handleInputChange} name='password'
                  />
                  {errorsRegitrerUser.password && <p className='errores'>{errorsRegitrerUser.password}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='password_two' className='form-label'>Contraseña<span className='text-muted'>(Obligatorio)</span></label>
                  <input
                    type='password' className='form-control' id='password_two' placeholder='&GwkBYZ3-numeros-caracteres-mayusculas'
                    value={input.password_two} onChange={handleInputChange} name='password_two'
                  />
                  {errorsRegitrerUser.password && <p className='errores'>{errorsRegitrerUser.password}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='age' className='form-label'>Edad<span className='text-muted'>(Obligatorio)</span></label>
                  <input type='number' className='form-control' id='age' value={input.age} onChange={handleInputChange} name='age' />
                  {errorsRegitrerUser.age && <p className='errores'>{errorsRegitrerUser.age}</p>}
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='phoneNumber' className='form-label'>Numero Celular<span className='text-muted'>(Optional)</span></label>
                  <input type='number' className='form-control' id='phoneNumber' value={input.phoneNumber} onChange={handleInputChange} name='phoneNumber' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='street' className='form-label'>Dirección de residencia <span className='text-muted'>(Optional)</span></label>
                  <input type='text' className='form-control' id='street' value={input.street} onChange={handleInputChange} name='street' />
                </div>

                <div className='col-sm-6'>
                  <label htmlFor='city' className='form-label'>Ciudad de residencia <span className='text-muted'>(Optional)</span></label>
                  <input type='text' className='form-control' id='city' value={input.city} onChange={handleInputChange} name='city' />
                </div>
              </div>

              <div className='container-button d-flex'>
                <button className='w-100 btn btn-primary btn-lg mt-5'>Registrarse</button>
                <Link className='w-100 btn btn-primary btn-lg mt-5' to='/login'>Volver</Link>
              </div>

            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignUp
