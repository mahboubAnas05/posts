import { useEffect, useState } from "react";
import Student from "../components/student";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ListeStudents(){

    const [g203, setG203] = useState([])
    
    useEffect(()=>{
        axios.get("https://students203204.vercel.app/api/groups/group203")
        .then((responce)=>{
            setG203(responce.data)
        })
        .catch(()=>{
            alert('there is a error')
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
                    g203.map(function(student){
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