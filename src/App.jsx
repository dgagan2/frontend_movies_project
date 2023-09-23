import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import SignUp from './pages/signUp/SignUp'
import ForgotPassword from './pages/restorePassword/ForgotPassword'
function App () {
  const isLogin = false
  return (
    <>
      <BrowserRouter>
        {isLogin
          ? <RoutesIndex />
          : (
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/account/registration' element={<SignUp />} />
              <Route path='/account/forgotpassword' element={<ForgotPassword />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
            )}

      </BrowserRouter>
    </>
  )
}

export default App
