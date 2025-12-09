import axios from "axios"
import { useState } from "react"

export default function Ajouter(){

    const [text, setText] = useState("")
    const [body, setBody] = useState("")
    const [postsArray, setPostsArray] = useState([])

    function AddPost(){
        if(!text || !body) return
        const newPost = {
            id : Date.now(),
            text : text,
            body : body,
            status : false
        }
        axios.post("http://localhost:5000/postsArray", newPost)
        .then(()=>{
            setPostsArray([...postsArray, newPost])
            setText('')
            setBody('')
            alert('Added ')
        })
        .catch(()=>{
            alert("il y a un erreur !!! ")
        })
    }

    return(
        <div>

            <h2 className="text-center mt-5">Gestion des Postes</h2>
            <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="form-control mt-3" placeholder="entrer le nom du poste"/>
            <textarea value={body} onChange={(e)=>setBody(e.target.value)} className="form-control mt-3" placeholder="decrire votre poste"></textarea>
            <div className="text-center">
                <input onClick={()=>AddPost()} type="button" value={"Ajouter"} className="btn btn-warning mt-3" />
            </div>
            

        </div>
    )   
}