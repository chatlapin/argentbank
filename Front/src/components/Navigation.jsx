import { Link, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import argentBankLogo from '@/assets/argentBankLogo.png'
import { logout } from '@/redux/features/auth/authSlice'
import { useEffect } from 'react'

const Navigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector(state => state.auth)
  /* useEffect(() => {
      if (!isAuthenticated) {
         navigate('/')
       }
     }, [isAuthenticated, navigate])*/


  const handleSignOut = () => {
    dispatch(logout())
    navigate('/')
  }
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!isAuthenticated ? (
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          <Link className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navigation
