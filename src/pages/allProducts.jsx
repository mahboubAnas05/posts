import { Products } from "../data/products";
import ProductCard from "../components/productCard";

export default function AllProducts(){
    return(
        <div className="m-3">

            <div className="mt-3 border border-primary p-3 rounded"><h3>Liste des Produits</h3></div>
            <div className="d-flex justify-content-between mt-3 border border-success p-3 rounded">
                <div>
                    <h6>Catégorie: </h6>
                    <select>
                        <option value={"-1"} className="text-muted">Toutes</option>
                    </select>
                </div>
                <div>
                    <p className="text-muted">{Products.length} produits trouvés</p>
                </div>
            </div>

            <div style={{
                "display" : "grid",
                "gridTemplateColumns" : "1fr 1fr 1fr 1fr",
                "gap" : "1rem",
                "marginTop" : "1rem"
            }}>

                {
                    Products.map(function(product, index){
                        return(
                            <ProductCard key={index} product={product}/>
                        )
                    })
                }

            </div>

        </div>
    )
}