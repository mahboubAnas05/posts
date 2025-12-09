import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <center className="bg-dark text-light p-3">
            <div className="d-flex justify-content-between mx-5">
                <div>CONTACT: 0612345678</div>
                <div className="text-center">EMAIL: MyPosts2004@mail.com</div>
                <div><Link to={"#"} className="text-light">FAQ</Link></div>
            </div>
            <p className="mt-4">@copy tous les drois sont reservés</p>
        </center>
    )
}