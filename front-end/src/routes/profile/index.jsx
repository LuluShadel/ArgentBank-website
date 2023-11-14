import { useSelector } from "react-redux"
import Account from "../../components/Account"
import "../../style/profile.css"
import { useState } from "react"
import EditName from "../../components/EditName"


export default function Profile () {


    const userProfile = useSelector((state) => state.userReducer.userProfile)

   

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleModifClick = () => {
        setIsModalOpen(true);
      };
      const handleCloseEdit = () => {
        setIsModalOpen(false)
        
      };




    return (
        <div className="main bg-dark">
        <div className="header">
        <h1>Welcome back <br />{userProfile.firstName} {userProfile.lastName}</h1>
        <button className="edit-button" onClick={handleModifClick}>Edit Name</button>

        {isModalOpen &&
        <EditName closeEdit={handleCloseEdit} />
        }
      </div>

        <Account />
</div>

    )
}