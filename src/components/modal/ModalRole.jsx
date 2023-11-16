/* eslint-disable no-unused-vars */
import useForm from '../../hooks/useForms'
import { useEffect } from 'react'
import './modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { modalClose } from '../../features/modals/modalSlice'
import { toast } from 'react-toastify'
import { updateRole, reset } from '../../features/roles/roleSlice'

const ModalRole = () => {
  const { isOpen, dataRole } = useSelector((state) => state.modalReduce)
  const { isSuccessUpdateRole } = useSelector((state) => state.rol)
  const dispatch = useDispatch()
  const sendData = () => {
    if (input) {
      dispatch(updateRole(input))
    } else {
      toast.error('El nombre del rol no puede estar vacio')
    }
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)

  useEffect(() => {
    if (isSuccessUpdateRole) {
      toast.success('Rol Actualizado', { autoClose: 1000, hideProgressBar: false })
    }
    dispatch(modalClose())
    dispatch(reset())
  }, [isSuccessUpdateRole])

  useEffect(() => {
    if (dataRole) {
      const { id, name } = dataRole
      setInput({
        id,
        name
      })
    }
  }, [dataRole])

  const close = (e) => {
    e.preventDefault()
    setInput({
      id: '',
      name: ''
    })
    dispatch(modalClose())
    dispatch(reset())
  }

  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <h3>Editar Rol</h3>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='firstname'>
              Nombre del Rol
            </label>
            <input className='form-control' type='text' id='name' name='name' value={input?.name} onChange={handleInputChange} />
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

export default ModalRole
