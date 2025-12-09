import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ListeStudents204(){
    const [g204, setG204] = useState([])
    
    useEffect(()=>{
        axios.get("https://students203204.vercel.app/api/groups/group204")
        .then((responce)=>{
            setG204(responce.data)
        })
        .catch(()=>{
            alert("error")
        })
    }, [])

    return(
        <div className="mt-5">
            <center className="mx-3">
                <div className="d-flex justify-content-between gap-5">
                    <p className="text-muted">CEF</p>
                    <p className="text-muted">NOM</p>
                    <p className="text-muted">PRENOM</p>
                    <p className="text-muted">GROUPE</p>
                </div>
                    <hr />
                
                <div>
                    {
                        g204.map(function(student){
                            return(
                                <div>
                                    <Link to={`/student/${student.CEF}`} className="w-100 text-decoration-none text-dark">
                                        <article className="d-flex justify-content-between">

                                            <p>{student.CEF}</p>
                                            <p>{student.Nom}</p>
                                            <p>{student.Prenom}</p>
                                            <p>{student.Group}</p>

                                        </article>
                                        <hr />
                                    </Link>
                        </div>
                            )
                        })
                    }
                </div>
            
            </center>
        </div>
    )
}