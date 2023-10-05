import React from 'react'

const searchRole = () => {
  return (
    <div className='container-form-role'>
      <form onSubmit={handleSubmit}>
        <div className='form-login d-flex flex-column gap-2'>
          <label className='form-label'>Nombre del Rol</label>
          <input type='text' className='form-control' name='name' id='name' onChange={(e) => { setRole(e.target.value) }} />
          <div className='d-flex gap-3'>
            <button className='w-50 btn btn-lg' type='submit' style={{ backgroundColor: '#10104e', color: 'white' }}>Buscar</button>
          </div>

        </div>

      </form>
    </div>
  )
}

export default searchRole
