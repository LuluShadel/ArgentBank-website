import { useSelector } from "react-redux"
import Account from "../../components/Account"
import "../../style/profile.css"


export default function Profile () {


    const userProfile = useSelector((state) => state.userReducer.userProfile)





    return (
        <div className="main bg-dark">
        <div className="header">
        <h1>Welcome back <br />{userProfile.userName}</h1>
        <button className="edit-button">Edit Name</button>
      </div>

        <Account />
</div>

    )
}