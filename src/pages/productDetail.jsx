import { Link, useParams } from "react-router-dom"
import { Products } from "../data/products"

export default function ProductDetails(){

    const {id} = useParams()
    const product = Products.find(function(product){
        return product.id === parseInt(id)
    })

    return(
        <div className="m-3">

            <div className="border border-primary p-3 rounded">
                <Link className="btn" to={"/products"}>Retour aux produits</Link>
            </div>

            <div className="mt-3 d-flex justify-content-center gap-3">
                <div className="bg-secondary p-5 border rounded border-success w-100"></div>
                <div className="rounded border border-primary p-3 w-100">
                    <h2>{product.name}</h2>
                    <h5>{"⭐".repeat(product.rating)}</h5>
                    <h2 className="text-primary">{product.price} DH</h2>
                    <h6>Description:</h6>
                    <p>{product.description}</p>
                </div>
            </div>

        </div>
    )

}