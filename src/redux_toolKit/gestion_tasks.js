import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, delTask, editTask } from "./taskSlice"


export default function GestionTasks(){

    const tasks = useSelector(data => data.tasks_store.tasks) /// waaaa anasss linkiha m3a store "tasks_store"
    const [text, setText] = useState("")

    const [editedId, setEditedId] = useState(null)
    const [editedtext, setEditedtext] = useState("")


    const dispatcher = useDispatch()

    return(
        <div className="container-fluid bg-dark vh-100 flex-grow">

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <center>
                    <h1 className="text-capitalize text-light">gestion des taches</h1>
                    <input className="my-3 p-2 rounded w-50 border-0 bg-secondary text-light " value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="entrer le de tache"/>
                    <button className="p-2 ms-2 rounded border-0 text-light bg-primary" onClick={()=>{
                        if(text) dispatcher(addTask(text))
                        setText("")
                    }}>Ajouter</button>

                    

                    <div>
                        {
                            tasks.map(function(task){

                                if(editedId === task.id){
                                    return(
                                        <div>
                                            <input className="my-3 p-2 rounded w-50 border-0 bg-secondary text-light" value={editedtext} onChange={(e)=>setEditedtext(e.target.value)} type="text" placeholder="entrer la nouvelle tache"/>
                                            <input className="p-2 ms-2 rounded border-0 text-light bg-success" onClick={()=>{
                                                if(editedtext.trim()) dispatcher(editTask({id : task.id, text : editedtext}))
                                                setEditedId(null)
                                                setEditedtext('')
                                            }} type="button" value={"Enregistrer"}/>

                                        </div>
                                    )
                                }

                                return(
                                    <center key={task.id} className="bg-secondary mt-3 d-flex justify-content-between p-3 rounded">
                                        <p className="text-light">{task.text}</p>
                                        <div>
                                        <button className="btn btn-light me-2" onClick={()=>{
                                        setEditedId(task.id)
                                        setEditedtext(task.text)
                                        }} >Modifier</button>
                                        <button className="btn btn-danger" onClick={()=>{
                                            dispatcher(delTask(task.id))
                                        }} >Supprimer</button>

                                        </div>
                                    </center>
                                )
                            })
                        }
                    </div>

                </center>
                </div>
                <div className="col-2"></div>
            </div>

        </div>
    )
}


/*

            <center>
                <h1>gestion des taches</h1>
                <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="entrer le de tache"/>
                <button onClick={()=>
                    {
                        if(text){
                            dispatcher(addTask(text))
                            setText("")
                        }
                    }
                } >Ajouter</button>

                <div>
                    {
                        tasks.map(function(task){
                            return (
                                <div key={task.id}>
                                    <p>{task.text}</p>
                                    <button>Modifier</button>
                                    <button onClick={()=>{dispatcher(delTask(task.id))}}>supprimer</button>
                                </div>
                            )
                        })
                    }
                </div>

            </center>























        
*/