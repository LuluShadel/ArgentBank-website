import '../../style/header.css'
import Logo from '../../assets/argentBankLogo.png'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Header () {

return (
<nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        </Link>
      <div>
        <NavLink className="main-nav-item" href="./sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
)}

export default Header