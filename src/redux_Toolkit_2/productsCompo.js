import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct, delProduct } from "./productSlice"

export default function Gestion_produits(){

    const [text, setText] = useState("")
    const [Qt, setQt] = useState("")

    const products = useSelector(data=>data.products_store.products)
    const dispatcher = useDispatch()


    return(
        <center>
            <h1>Gestion Des Produits</h1>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Nom du produit" />
            <input value={Qt} onChange={(e)=>setQt(e.target.value)} type="text" placeholder="Quantité (Qt)" />
            <input type="button" value={"Ajouter"} 
            onClick={()=>{
                if(text.trim() && Qt.trim()) dispatcher(addProduct({text, Qt}))
                setText("")
                setQt("")
            }}
            />

            {
                products.map(function(product){
                    return(
                    <div>
                        <div>
                            <h5>{product.text}</h5>
                            <h5>(QT: {product.Qt})</h5>
                        </div>
                        <div>
                            <input type="button" value={"Modifier"} />
                            <input onClick={()=> dispatcher(delProduct(product.id))} type="button" value={"Supprimer"} />
                        </div>
                    </div>
                    )
                })
            }

        </center>
    )
}
/*




*/