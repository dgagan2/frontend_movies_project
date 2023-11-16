/* eslint-disable no-unused-vars */
import useForm from '../../hooks/useForms'
import { validateFormUpdateUSer } from '../../pages/signUp/validateFormSingUp'
import { useEffect, useState } from 'react'
import './modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { modalClose } from '../../features/modals/modalSlice'
import { reset, updateUser } from '../../features/user/userSlice'
import { toast } from 'react-toastify'

const ModalUser = () => {
  const [errorInput, setErrorInput] = useState({})
  const { isOpen, id } = useSelector((state) => state.modalReduce)
  const { searchedUser, isSuccessUpdate } = useSelector((state) => state.users)
  const { roles } = useSelector((state) => state.rol)
  const dispatch = useDispatch()
  const sendData = () => {
    const newErros = validateFormUpdateUSer(input)
    setErrorInput(newErros)
    if (Object.keys(newErros).length === 0) {
      dispatch(updateUser(input))
    }
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)
  useEffect(() => {
    if (isSuccessUpdate) {
      toast.success('Usuario Actualizada', { autoClose: 1000, hideProgressBar: false })
    }
    dispatch(modalClose())
    dispatch(reset())
  }, [isSuccessUpdate])
  useEffect(() => {
    if (searchedUser) {
      const { id, email, fullName, age, phoneNumber, street, city, role, state } = searchedUser
      setInput({
        id,
        email,
        firstname: fullName.firstname,
        lastName: fullName.lastName,
        age,
        phoneNumber,
        street,
        city,
        role,
        state
      })
    }
  }, [id, searchedUser])

  const close = (e) => {
    e.preventDefault()
    setErrorInput({})
    setInput({
      id: '',
      email: '',
      firstname: '',
      lastName: '',
      age: '',
      phoneNumber: '',
      street: '',
      city: '',
      role: '',
      state: ''
    })
    dispatch(modalClose())
    dispatch(reset())
  }

  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <h3>Editar Usuario</h3>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='firstname'>
              Nombres
            </label>
            <input className='form-control' type='text' id='firstname' name='firstname' value={input?.firstname} onChange={handleInputChange} />
            {errorInput.firstname && <p className='errores'>{errorInput.firstname}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='lastName'>
              Apellidos
            </label>
            <input className='form-control' type='text' id='lastName' name='lastName' value={input?.lastName} onChange={handleInputChange} />
            {errorInput.lastName && <p className='errores'>{errorInput.lastName}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='email'>
              Corre Electronico
            </label>
            <input className='form-control' type='text' id='email' name='email' value={input?.email} onChange={handleInputChange} />
            {errorInput.email && <p className='errores'>{errorInput.email}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor=''>
              Role
            </label>
            <select id='state' className='form-select' name='role' value={input?.role} onChange={handleInputChange}>
              {roles && roles.map((role) => (
                <option key={role._id} value={role.name}>{role.name}</option>
              ))}
            </select>

          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor=''>
              Estado
            </label>
            <select id='state' className='form-select' name='state'>
              <option value='active'>Habilitado</option>
              <option value='disabled'>Deshabilitado</option>
            </select>
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor=''>
              Edad
            </label>
            <input className='form-control' type='text' id='age' name='age' value={input?.age} onChange={handleInputChange} />
            {errorInput.age && <p className='errores'>{errorInput.age}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='phoneNumber'>
              Numero Celular
            </label>
            <input className='form-control' type='text' id='phoneNumber' name='phoneNumber' value={input?.phoneNumber} onChange={handleInputChange} />
            {errorInput.phoneNumber && <p className='errores'>{errorInput.phoneNumber}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='street'>
              Dirección de residencia
            </label>
            <input className='form-control' type='text' id='street' name='street' value={input?.street} onChange={handleInputChange} />
            {errorInput.street && <p className='errores'>{errorInput.street}</p>}
          </div>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor=''>
              Ciudad de residencia
            </label>
            <input className='form-control' type='text' id='city' name='city' value={input?.city} onChange={handleInputChange} />
            {errorInput.city && <p className='errores'>{errorInput.city}</p>}
          </div>
          <div className='d-flex gap-3' id='container-buttons-modal-user'>
            <button className='w-50 btn btn-lg' type='submit'>Guardar</button>
            <button className='w-50 btn btn-lg' type='action' onClick={(e) => { close(e) }}>Salir</button>
          </div>
        </form>
      </div>

    </article>
  )
}

export default ModalUser
