import Account from "../../components/Account"
import "../../style/profile.css"


export default function Profile () {

    return (
        <div className="main bg-dark">
        <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>

        <Account />
</div>

    )
}