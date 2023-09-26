import { Link, useNavigate } from 'react-router-dom'
import { logout, reset } from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux'
import iconUser from '../../assets/iconUser.png'
import { useEffect } from 'react'
const DropdownMenuUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)
  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/login')
  }
  useEffect(() => {
    setTimeout(() => { alert('tiempo') }, 5000000)
  }, [user])

  return (
    <div className='dropdown' id='Container-dropdown-menu-user'>
      <button type='button' className='btn btn-secondary dropdown-toggle' data-bs-toggle='dropdown' id='dropdownMenuUser' aria-expanded='false'>
        <img src={iconUser} alt='' />
      </button>
      <ul className='dropdown-menu' aria-labelledby='dropdownMenuUser'>
        {user?.role === 'admin'
          ? <li><Link className='dropdown-item' to=''>Dashboard</Link></li>
          : null}
        <li className='dropdown-item disabled'>Bienvenido {user?.name}</li>
        <li><Link className='dropdown-item' to=''>Mi perfil</Link></li>
        <li><button className='dropdown-item' onClick={onLogout}>Salir</button></li>
      </ul>
    </div>
  )
}

export default DropdownMenuUser
