import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function DetailStudent(){

    const [foundStudent, setFoundStudent] = useState([])
    const {CEF} = useParams()

    useEffect(()=>{
        axios.get("https://students203204.vercel.app/api/students/:CEF")
        .then((responce)=>{
            setFoundStudent(responce.data)
        })
        .catch(()=>{
            alert('error !!!')
        })
    }, [CEF])

    
    const studDaitail = foundStudent.find(function(student){
        return student.CEF === CEF
    })

    return(
        <div className="bg-white p-4 m-5 rounded" 
        style={{
            'boxShadow' : "1px 12px 40px 0.5px gray",
            "marginBottom" : "1rem"
            
        }}
        >

        <Link to={"/"} className="btn btn-primary"> Retour à liste </Link>            

        <h1 className="mt-3 fw-bold">
            Détails de l'Etudiant
        </h1>

        <hr className="w-100 " />
        
        <div className="d-flex justify-content-between">
           <p>CEF</p>
           <p>{studDaitail.CEF}</p>
        </div>
        <hr className="w-100"/>

        <div className="d-flex justify-content-between">
           <p>Nom </p>
           <p>{studDaitail.Nom}</p>
        </div>
        <hr className="w-100"/>

        <div className="d-flex justify-content-between">
           <p>Prenom </p>
           <p>{studDaitail.Prenom}</p>
        </div>
        <hr className="w-100"/>

        <div className="d-flex justify-content-between">
           <p>Group </p>
           <p className="text-primary">{studDaitail.Group}</p>
        </div>
        <hr className="w-100"/>

        </div>
    )
}