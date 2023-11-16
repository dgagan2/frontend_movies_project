import './menu.css'
import { Link } from 'react-router-dom'
const MenuDashboard = () => {
  return (
    <>
      <article id='container-menu-dashboard'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>
                Usuarios
              </button>
            </h2>
            <div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard'>Consultar Usuario</Link>
              </div>
            </div>
            <div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard/role'>Roles</Link>
              </div>
            </div>
            <div id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard/state'>Estados</Link>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                Peliculas
              </button>
            </h2>
            <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard/movie/add'>Agregar Pelicula</Link>
              </div>
            </div>
            <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard/movie/update'>Editar Pelicula</Link>
              </div>
            </div>

          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingThree'>
              <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                Generos y Lenguajes
              </button>
            </h2>
            <div id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
              <div className='accordion-body'>
                <Link className='w-100' id='accordion-button-item' to='/dashboard/genre'>Genero</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

    </>
  )
}

export default MenuDashboard
