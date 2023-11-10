import { useDispatch, useSelector } from "react-redux";
import "../../style/modal.css"
import { useState } from "react";

import {changeUserName} from "../../action/user.action"


export default function EditName ({closeEdit}) {
const dispatch = useDispatch()


    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(changeUserName(newUserName))
        setNewUserName("");
    }

    const [newUserName, setNewUserName] = useState("")


    const handleNewUserName = (e) => setNewUserName(e.target.value)

  
    const userProfile = useSelector((state) => state.userReducer.userProfile)


    return (
        <div className="edit-name">
  <h1>Changes to your personal data</h1>

  <form className="form-edit-name" onSubmit={handleSubmit} >
  <i className="fa-solid fa-xmark" onClick={closeEdit}></i>
  <div className="input-wrapper">
      <label htmlFor="FirstName">FirstName</label>
      <span>{userProfile.firstName}</span>
    </div>
    <div className="input-wrapper">
      <label htmlFor="LastName">LastName</label>
      <span>{userProfile.lastName}</span>
    </div>
    <div className="input-wrapper">
      <label htmlFor="Email">Email</label>
      <span>{userProfile.email}</span>
    </div>
    <div className="input-wrapper">
      <label htmlFor="UserName">UserName</label>
      <span>{userProfile.userName}</span>
      <input
        type="text"
        id="UserName"
        placeholder="Enter your new user name"
        value={newUserName}
        onChange={handleNewUserName}
      />
    </div>

    <button className="sign-in-button" type="submit">
      Change
    </button>
  </form>
</div>
    )
}