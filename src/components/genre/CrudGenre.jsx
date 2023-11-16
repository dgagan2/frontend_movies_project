import React, { useState, useEffect } from 'react'
import iconDeleteUser from '../../assets/iconDelete.png'
import iconEditUser from '../../assets/iconEdit.png'
import iconSearch from '../../assets/iconoBuscar.png'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGenre, searchGenreByName, newGenre, reset, getGenres, modalOpen } from '../../features/genres/genreSlice'
import Spinner from '../Spinner'

const CrudGenre = () => {
  const [inputGenre, setInputGenre] = useState('')
  const [headerList, setHeaderList] = useState(false)
  const dispatch = useDispatch()
  const { genres, isLoading, isError, isSuccess, message, isSuccessUpdateGenre } = useSelector((state) => state.genre)

  useEffect(() => {
    setTimeout(() => {
      dispatch(getGenres())
    }, 100)
  }, [isSuccessUpdateGenre, isSuccess, isError])

  useEffect(() => {
    if (isError) {
      toast.error(message.message || message)
    }

    if (isSuccess) {
      message && toast.success(message)
    }
    dispatch(reset())
  }, [message])

  const addGenre = () => {
    if (inputGenre) {
      dispatch(newGenre({ name: inputGenre, headerList }))
      resetBox()
    } else {
      toast.error('Debe ingresar el nombre del Genero')
    }
  }

  const Delete = (id) => {
    dispatch(deleteGenre(id))
  }
  const editRole = (data) => {
    dispatch(modalOpen(data))
  }
  const searchGenre = (e) => {
    e.preventDefault()
    if (inputGenre) {
      dispatch(searchGenreByName(inputGenre))
    } else {
      toast.error('Campo vacio')
    }
  }

  const resetBox = () => {
    setInputGenre('')
    setHeaderList(false)
    dispatch(getGenres())
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <article className='container-genre'>
        <div className='container-form-genre'>
          <form onSubmit={(e) => { searchGenre(e) }}>
            <label className='form-label'>Nombre del Genero</label>
            <div className='form-genre d-flex flex-row gap-2'>
              <input type='text' className='form-control' name='name' id='name' value={inputGenre} onChange={(e) => { setInputGenre(e.target.value) }} />
              <button className='button-form-search-genre' type='submit'><img src={iconSearch} alt='icono de busqueda' /></button>
            </div>
            <div className='custom-control custom-checkbox'>
              <input type='checkbox' checked={!!headerList} className='custom-control-input' id='headerList' onChange={(e) => { setHeaderList(true) }} />
              <label className='custom-control-label' htmlFor='headerList'>Si desea mostrar el genero en la barra de navegación seleccionelo</label>
            </div>
          </form>
          <div className='d-flex gap-3 p-2'>
            <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { resetBox() }}>Borrar</button>
            <button className='w-50 btn btn-lg' type='action' style={{ backgroundColor: '#10104e', color: 'white' }} onClick={() => { addGenre() }}>Agregar</button>
          </div>
        </div>
        <div className='container-genre-list'>
          <div className='table-responsive'>
            <table className='table align-middle'>
              <thead>
                <tr>
                  <th>Nombre del Genero</th>
                  <th>Mostrar en Header</th>
                </tr>
              </thead>
              <tbody>
                {genres && genres?.map((data) => (
                  <tr key={data?._id}>
                    <td>{data?.name}</td>
                    <td>{data?.headerList ? 'SI' : 'NO'}</td>
                    <td><button onClick={() => { editRole(data) }}><img src={iconEditUser} alt='Editar Genero' /></button></td>
                    <td><button onClick={() => { Delete(data._id) }}><img src={iconDeleteUser} alt='Eliminar Genero' /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </article>

    </>
  )
}

export default CrudGenre
