import { useDispatch, useSelector } from "react-redux";
import "../../style/editName.css"
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
  <h1>Edit user info</h1>

  <form className="form-edit-name" onSubmit={handleSubmit} >
  <div className="input-wrapper">
  <label htmlFor="FirstName">First name</label>
      <input 
      type="text"
      id="FirstName"
      placeholder={userProfile.firstName}
      disabled="disabled"
      />
    </div>
    <div className="input-wrapper">
    <label htmlFor="LastName">Last name</label>
      <input 
      type="text"
      id="LastName"
      placeholder={userProfile.lastName}
      disabled="disabled"
      />
    </div>
    <div className="input-wrapper">
    <label htmlFor="Email">Email</label>
      <input 
      type="text"
      id="Email"
      placeholder={userProfile.email}
      disabled="disabled"
      />
    </div>
    <div className="input-wrapper">
      <label htmlFor="UserName">UserName</label>
      <input
        type="text"
        id="UserName"
        placeholder={userProfile.userName}
        value={newUserName}
        onChange={handleNewUserName}
      />
    </div>
      <div className="buttons">
    <button className="sign-in-button" type="submit">
      Save
    </button>
    <button className="sign-in-button" onClick={closeEdit}  >
      Cancel
    </button>
    </div>
  </form>
</div>
    )
}