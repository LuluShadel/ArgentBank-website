import { Link } from "react-router-dom";
import Prise from "../../assets/fils_electrique.avif"
import "../../style/error.css"


export default function Error () {
    return(
        <div className="error">
            <h1 className="error_title">404 ERROR</h1>
            <p className="error_text">Sorry, the page not found</p>
            <img src={Prise} alt="fils débranchés" />
            <Link className="error_link" to="/"> Return to the HomePage </Link>
        </div>
    )
}