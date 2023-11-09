import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../action/user.action";
import "../../style/SignIn.css"
import React, {useState} from "react"
import { useNavigate } from 'react-router-dom';



export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false)
 


    const loginError = useSelector((state) => state.userReducer.errorMessage); // Accéder au message d'erreur depuis le state Redux
    
    

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleRememberMe = (e) => setRememberMe(true)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email,password,navigate,rememberMe))
    }
        

    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>

          <form onSubmit={handleSubmit} >
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              id="username"
              placeholder="Your Email"
              value={email}
              onChange={handleEmailChange}
               />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
              type="password" 
              id="password"
              placeholder="Your password"
              value={password}
              onChange={handlePasswordChange} 
              />
            </div>
            <div className="input-remember">
              <input 
              type="checkbox"
               id="remember-me"
               checked={rememberMe}
               onChange={handleRememberMe} 
               />
              <label htmlFor="remember-me">Remember me</label>
            </div>
  
            
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            
            <button className="sign-in-button" type="submit">Sign In</button>
            
          </form>
        </section>
      </main>
    );
            }