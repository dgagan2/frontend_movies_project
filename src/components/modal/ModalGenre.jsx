import useForm from '../../hooks/useForms'
import { useEffect } from 'react'
import './modal.css'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { updateGenre, reset, modalClose } from '../../features/genres/genreSlice'
const ModalGenre = () => {
  const { isOpen, dataGenre, isSuccessUpdateGenre } = useSelector((state) => state.genre)

  const dispatch = useDispatch()
  const sendData = () => {
    if (!input) {
      toast.error('El nombre del género no puede estar vacío')
      return
    }
    dispatch(updateGenre(input))
  }

  const { input, handleSubmit, handleInputChange, setInput } = useForm(sendData)

  useEffect(() => {
    dispatch(modalClose())
    dispatch(reset())
  }, [isSuccessUpdateGenre])

  useEffect(() => {
    if (dataGenre) {
      const { _id, name, headerList } = dataGenre
      setInput({
        id: _id,
        name,
        headerList
      })
    }
  }, [dataGenre])

  const close = (e) => {
    e.preventDefault()
    setInput({
      id: '',
      name: '',
      headerList: ''
    })
    dispatch(modalClose())
    dispatch(reset())
  }
  console.log(input)
  return (
    <article className={`modal ${isOpen ? 'is-open' : ''}`}>
      <div className='modal-dialog modal-dialog-scrollable'>
        <h3>Editar Genero</h3>
        <form className='needs-validation' onSubmit={handleSubmit}>
          <div className='col-sm-6'>
            <label className='form-label' htmlFor='firstname'>
              Nombre del Genero
            </label>
            <input className='form-control' type='text' id='name' name='name' value={input?.name} onChange={handleInputChange} />
          </div>
          <div className='custom-control custom-checkbox'>
            <input type='checkbox' checked={!!input?.headerList} className='custom-control-input' id='headerList' onChange={() => { setInput({ ...input, headerList: !input.headerList }) }} />
            <label className='custom-control-label' htmlFor='headerList'>Mostrar Genero en el Header</label>
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

export default ModalGenre
