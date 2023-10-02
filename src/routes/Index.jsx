import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Dashboard from '../pages/dashboard/Dashboard'
import DashboardRole from '../pages/dashboard/role/DashboardRole'
import DashboardAddMovie from '../pages/dashboard/movie/DashboardAddMovie'
import DashboardUpdateMovie from '../pages/dashboard/movie/DashboardUpdateMovie'
import DashboardGenre from '../pages/dashboard/genre/DashboardGenre'
import Movie from '../pages/movieDetails/Movie'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/role' element={<DashboardRole />} />
      <Route path='/dashboard/movie/add' element={<DashboardAddMovie />} />
      <Route path='/dashboard/movie/update' element={<DashboardUpdateMovie />} />
      <Route path='/dashboard/genre' element={<DashboardGenre />} />
      <Route path='/prueba' element={<Movie />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
