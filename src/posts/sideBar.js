import { Link } from "react-router-dom"

export default function SideBar(){

    return(
        <div className="m-4 text-center border p-3">
           <h3>Menu</h3>
           <hr/>
           <article><Link className="text-dark text-decoration-none" to={"/"}>Acueil</Link></article>
           <hr/>
           <article><Link className="text-dark text-decoration-none" to={"/List"}>Mes Postes</Link></article> {/*props*/}
           <hr/>
           <article><Link className="text-dark text-decoration-none" to={"/aboutUs"}>A propos</Link></article> {/*statique*/}
           <hr/>
           <article><Link className="text-dark text-decoration-none" to={"/Todo"}>Ajouter un poste</Link></article> {/* crud */}
        </div>
    )
}