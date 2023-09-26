import { Link } from 'react-router-dom'
import './billboard.css'

const BillboardMovies = () => {
  return (
    <div id='carouselExampleControls' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <div className='carousel-data-movies'>
            <h2>Titulo</h2>
            <p>Descripcion</p>
            <b>Duracion</b>
            <Link className='w-50 btn btn-primary btn-sm mt-3'>Ver Pelicula</Link>
          </div>
          <img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/08/star-wars-2791631.jpg?tf=3840x' className='d-block w-100' alt='...' />
        </div>
        {/* <div className='carousel-item'>
          <img src='https://i.blogs.es/5b71be/calendario-peliculas-marvel/1366_2000.jpeg' className='d-block w-100' alt='...' />
        </div>
        <div className='carousel-item'>
          <img src='https://www.lavanguardia.com/andro4all/hero/2023/04/terror-netflix.png?width=768&aspect_ratio=16:9&format=nowebp' className='d-block w-100' alt='...' />
        </div> */}
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleControls' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default BillboardMovies

// const BillboardMovies = () => {
//   return (
//     <>
//       <div className='billboard-movies-list'>
//         <img src='https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/08/star-wars-2791631.jpg?tf=3840x' alt='' />
//         <h2>Titulo</h2>
//         <p>Descripcion</p>
//         <b>Duracion</b>
//         <Link>Ver Pelicula</Link>
//       </div>
//     </>
//   )
// }

// export default BillboardMovies
