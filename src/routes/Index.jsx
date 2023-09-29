import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
import Dashboard from '../pages/dashboard/Dashboard'
import DashboardRole from '../pages/dashboard/DashboardRole'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/role' element={<DashboardRole />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
