import { useState } from "react";
import { useDispatch } from "react-redux";


import {newUser} from "../../action/user.action"


export default function SignUp () {

const dispatch = useDispatch()

const [email,setEmail] = useState("")
const [password,setPassword] =useState("")
const [lastName,setLastName] = useState("")
const [firstName,setFirstName] =useState("")
const [userName,setUserName]= useState("")

const handleEmail = (e) => setEmail(e.target.value)
const handlePassword=(e) => setPassword(e.target.value)
const handleLastName=(e) =>setLastName(e.target.value)
const handleFirstName=(e) => setFirstName(e.target.value)
const handleUserName=(e) => setUserName(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !lastName || !firstName || !userName) {
          alert("Please fill in all the fields of the form.");
          return;
        }


        dispatch(newUser(email,password,lastName,firstName,userName))
    }

    return (
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign Up</h1>

          <form onSubmit={handleSubmit} >
          <div className="input-wrapper">
              <label htmlFor="Email">Email</label>
              <input 
              type="text" 
              id="Email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input 
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="Last Name">Last Name</label>
              <input 
              type="text" 
              id="Last Name"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastName}
               />
            </div>
            <div className="input-wrapper">
              <label htmlFor="First Name">First Name</label>
              <input 
              type="text" 
              id="First Name"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstName}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="User name">User name</label>
              <input 
              type="text" 
              id="User name"
              placeholder="User name"
              value={userName}
              onChange={handleUserName}
              />
            </div>
          
  
        
            
            <button className="sign-in-button" type="submit">Sign Up</button>
            
          </form>
        </section>
      </main>
    );
}

