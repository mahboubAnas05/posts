import { useDispatch, useSelector } from "react-redux"
import { Add, Del, setName, setQt } from "./action1"
import { useState } from "react"

export default function GestProducts(){
        
    const {products, pName, Qt} = useSelector((state) => state)

    const dispatcher = useDispatch()

    const [editedID, setEditedID] = useState(null)
    const [editedText, setEditedText] = useState("")
    const [editedQ, setEditedQ] = useState("")

    function Edit(product){ /// had lparametre khaso ykoun nafsou li f map()
        setEditedID(product.id)
        setEditedText(product.pName)
        setEditedQ(product.Qt)
    }

    function saveEdit(value){
        setEditedID(null)
        setEditedText(value)
        setEditedQ(value)
    }

    return (
        <div className="bg-success vh-100">
            <div className="container-fluid row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h1 className="text-light text-center ">Gestionnaire de Produits</h1>
                    
                    <div className="d-flex gap-2 mt-3 ">
                        <input value={pName} onChange={(e)=>dispatcher(setName(e.target.value))} type="text" className="form-control" placeholder="Nom de produit"/>
                        <input value={Qt} onChange={(e)=>dispatcher(setQt(e.target.value))} type="text" className="form-control" placeholder="Quantité (Qt)"/>
                        <button onClick={()=>dispatcher(Add())} className="btn btn-outline-light">Ajouter</button>
                    </div> 

                    <div className="mt-5">

                        {

                            
                            products.map(function(product){
                                if(editedID === product.id) {
                                    return(
                                    <article key={editedID} className=" p-3 rounded bg-light d-flex gap-2 mt-3 ">
                                        <input value={editedText} onChange={(e)=>setEditedText(e.target.value)} type="text" className="form-control" placeholder="Nom de produit"/>
                                        <input value={editedQ} onChange={(e)=>setEditedQ(e.target.value)} type="text" className="form-control" placeholder="Quantité (Qt)"/>
                                        <button onClick={()=>saveEdit(product)} className="btn btn-outline-success">Enregistrer</button>
                                    </article>
                                    )
                                }
                                return(
                                <article key={product.id} className=" p-3 rounded bg-light d-flex justify-content-between gap-2 mt-3 ">
                                    <div className="d-flex gap-1">
                                        <p>{product.pName}</p>
                                        <p>(QT : {product.Qt})</p>
                                    </div>
                                    <div className="d-flex gap-1">
                                        <button onClick={()=>Edit(product)} className="btn btn-outline-secondary">Modifier</button>
                                        <button onClick={()=>dispatcher(Del(product.id))} className="btn btn-outline-danger">Supprimer</button>
                                    </div>
                                </article>
                                )
                            })
                        }
                        
                    </div>

                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}

/*

    <article className=" p-3 rounded bg-light d-flex gap-2 mt-3 ">
        <input type="text" className="form-control" placeholder="Nom de produit"/>
        <input type="text" className="form-control" placeholder="Quantité (Qt)"/>
        <button className="btn btn-outline-success">Enregistrer</button>
    </article>

    <article className=" p-3 rounded bg-light d-flex justify-content-between gap-2 mt-3 ">
        <div className="d-flex gap-1">
            <p>test</p>
            <p>(QT : x)</p>
        </div>
        <div>
            <button className="btn btn-outline-secondary">Modifier</button>
            <button className="btn btn-outline-danger">Supprimer</button>
        </div>
    </article>



*/