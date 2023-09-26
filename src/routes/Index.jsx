import { Routes, Route } from 'react-router-dom'
import NotFound from '../pages/notFound/NotFound'
import Home from '../pages/home/Home'
const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  )
}
export default RoutesIndex
