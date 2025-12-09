
import { Link } from "react-router-dom"

export default function NavBar(){

    return(
        <div className="d-flex justify-content-between align-items-center bg-dark p-3">
            <div>
                <h1 className="text-light">My Posts</h1>
            </div>
            <div className="d-flex gap-4 align-items-center">
                <input type="button" className="btn btn-warning" value={"se connecter"}/>
            </div>
        </div>
    )
}