import { Link } from "react-router-dom"

export default function ProductCard({product}){
    return(
        <div className="card rounded">

            <div className="bg-secondary w-100" style={{"height" : "10rem"}}>

            </div>
            <div className="p-3">
                <h4>{product.name}</h4>
                <h6>{"⭐".repeat(product.rating)}</h6>
                <h4 className="text-primary">{product.price} DH</h4>
                <Link to={`/product/${product.id}`} className="btn btn-primary w-100">Voir</Link>
            </div>

        </div>
    )
}