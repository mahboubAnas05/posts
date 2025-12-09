import NavBar from "../components/navBar";
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="m-3">

            <NavBar/>

            <main className="mt-3 border border-primary p-3 rounded text-center">

                <h3>Bienvenue</h3>
                <p>Découvrez nos produits</p>
                <Link to={"/products"} className="btn btn-primary">Voir les produits</Link>

            </main>

        </div>
    )
}