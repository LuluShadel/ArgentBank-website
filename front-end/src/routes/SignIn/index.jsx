import "../../style/SignIn.css"
import React, {useState} from "react"
import { useNavigate } from 'react-router-dom';

const apiLogin = "http://localhost:3001/api/v1/user/login"




export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };
        
        try {
            const response = await fetch(apiLogin, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),

            })

            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                localStorage.setItem('token', token);
                setEmail("");
                setPassword(""); 
                navigate('/Profile');
                
                
            }
            else if (response.status === 400)  {
                alert("Invalid email or password")
                
              }
             
             } catch (error) {
                console.error('Erreur lors de la connexion :', error);
             }

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
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
  
            
            
            <button className="sign-in-button" type="submit">Sign In</button>
            
          </form>
        </section>
      </main>
    );
  }