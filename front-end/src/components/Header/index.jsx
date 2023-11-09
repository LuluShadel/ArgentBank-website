import '../../style/header.css'
import Logo from '../../assets/argentBankLogo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../../action/user.action'

function Header () {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const tokenLocalStorage = localStorage.getItem("token")
  const tokenSessionStorage = sessionStorage.getItem("token")
  const token = tokenLocalStorage || tokenSessionStorage
  
  

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate('/');
  };

  const userProfile = useSelector((state) => state.userReducer.userProfile)


return (
<nav className="main-nav">
    <>
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {!token && (
          <NavLink to="/SignIn" className="main-nav-item" href="./sign-in.html">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
        {token && (
          <>
            <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
              <i className="fa fa-user-circle"></i>
              {userProfile.userName}
            </NavLink>
            <NavLink to='/' className='main-nav-item' onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </>
        )}
      </div>
    </>
  </nav>
);}

export default Header