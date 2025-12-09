import { useDispatch, useSelector } from "react-redux"
import { Add, Del, setTaskName } from "../STORE/action3"
import { useState } from "react"

export default function GestTasks(){

    
    const {taskName, tasks} = useSelector((state) => {state})
    const dispatcher = useDispatch()


    const [editedID, setEditedID] = useState(null)
    const [editedText, setEditedText] = useState("")

    function ModifierButton(task){
        setEditedID(task.id)
        setEditedText(task.taskName)
    }

    function EnregitrerButton(taskID){ // katrahja3houm l cas initial
        setEditedID(null)
        setEditedText(editedText)
    }

    return(
        <center className="bg-dark p-3 vh-100">
            <h1 className="mt-3 text-capitalize text-light fw-bold">gestion des taches</h1>
            <input value={taskName} onChange={(e)=>dispatcher(setTaskName(e.target.value))} type="text" className="mt-3 form-control" placeholder="entrer le nom de tache..."/>
            <button onClick={() => dispatcher(Add())} className="btn btn-info mt-3">Ajouter</button>
            <main className="mt-3">

                {
                    tasks.map(function(task){

                        if(editedID === task.id){

                        return(
                        <article className=" border rounded d-flex justify-content-between p-3 mt-3">
                            <input value={editedText} onChange={(e)=>setEditedText(e.target.value)} type="text" className="w-50 p-1 rounded border" placeholder="modifier la tache ici..."/>
                            <div>
                                <button className="btn btn-success" onClick={()=>EnregitrerButton(task.id)} style={{"color" : "white"}}>enregistrer</button>
                            </div>
                        </article>
        
                        )
                        }

                        return(

                        <article key={task.id} className=" border rounded d-flex justify-content-between p-3 mt-3">
                            <h3 className="text-light">{task.taskName}</h3>
                            <div>
                                <button onClick={()=>ModifierButton(task)} className="btn btn-light me-1">modifier</button>
                                <button onClick={()=>dispatcher(Del(task.id))} className="btn btn-danger">supprimer</button>
                            </div>
                        </article>

                        )
                    })
                }
                

            </main>
        </center>
    )
}




/*

                <article className=" border rounded d-flex justify-content-between p-3 mt-3">
                    <h3 className="text-light">test</h3>
                    <div>
                        <button className="btn btn-light me-1">modifier</button>
                        <button className="btn btn-danger">supprimer</button>
                    </div>
                </article>

                <article className=" border rounded d-flex justify-content-between p-3 mt-3">
                    <input type="text" className="w-50 p-1 rounded border" placeholder="modifier la tache ici..."/>
                    <div>
                        <button className="btn btn-success" style={{"color" : "white"}}>enregistrer</button>
                    </div>
                </article>

*/