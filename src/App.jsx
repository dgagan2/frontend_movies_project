import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RoutesIndex from './routes/Index'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import SignUp from './pages/signUp/SignUp'
import ForgotPassword from './pages/restorePassword/ForgotPassword'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function App () {
  const { user, isSuccess } = useSelector((state) => state.auth)
  const [isLoggin, setIsLoggin] = useState(false)
  useEffect(() => {
    if (user != null) {
      setIsLoggin(true)
    } else {
      setIsLoggin(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isSuccess])
  return (
    <>
      <BrowserRouter>
        {isLoggin
          ? <RoutesIndex />
          : (
            <Routes>
              <Route path='/login' element={<Login />} />
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
