import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import SignUp from './pages/signUp/SignUp'
import ForgotPassword from './pages/restorePassword/ForgotPassword'
import { useSelector } from 'react-redux'

function App () {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
      <BrowserRouter>
        {user
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
      <ToastContainer
        position='top-center'
        autoClose={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme='colored'
        role='alert'
      />
    </>
  )
}

export default App
