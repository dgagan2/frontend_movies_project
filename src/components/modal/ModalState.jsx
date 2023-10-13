/* eslint-disable no-unused-vars */
import useForm from '../../hooks/useForms'
import { useEffect } from 'react'
import './modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { modalCloseState, resetState, updateState } from '../../features/state/stateSlice'

const ModalState = () => {
  const { isSucces, isOpen, stateToEdit } = useSelector((state) => state.state)
  const dispatch = useDispatch()
  const sendData = () => {
    if (input) {
      dispatch(updateState(input))
    } else {
      toast.error('El nombre del estado no puede estar vacio')
    }
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)

  useEffect(() => {
    if (isSucces) {
      toast.success('Estado Actualizado', { autoClose: 1000, hideProgressBar: false })
    }
    dispatch(modalCloseState())
    dispatch(resetState())
  }, [isSucces])

  useEffect(() => {
    if (stateToEdit) {
      const { id, name } = stateToEdit
      setInput({
        id,
        name
      })
    }
  }, [stateToEdit])

  const close = (e) => {
    e.preventDefault()
    setInput({
      id: '',
      name: ''
    })
    dispatch(modalCloseState())
    dispatch(resetState())
  }

  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <h3>Editar Estado</h3>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='firstname'>
              Nombre del Estadi
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

export default ModalState
