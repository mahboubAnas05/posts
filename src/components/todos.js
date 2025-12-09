import axios from "axios"
import { useEffect, useState } from "react"


export default function Todos(){

    const [todos, setTodos] = useState([])
    const [filterTodos, setFilterTodos] = useState([])
    const [selectedUserId, setSelcteduserId] = useState("-1") // hadi dial option lowla "value = -1"


    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((responce)=>{
            setTodos(responce.data)
        })
        .catch(()=>{
            alert("there is a error into your program !!!")
        })
    }, [])

    function handelSelect(event){
        const userId = event.target.value // had rah string 7it kayn f "value ="exemple"

        if(userId === "-1"){
            setFilterTodos(todos)
        }
        else{
            const filtred = Todos.filter(function(todo){
                return(todo.userId === parseInt(userId))
            })

            setFilterTodos(filtred)
        }
    }



    return(
        <div className="cantainer row">
            <div className="col-3"></div>
            <div className="col-6">
                <h1 className="fw-bold">Listes Des Todos</h1>
                <p className="text-muted"> {todos.length} todo(s)</p>
                <div className="w-100 bg-primary p-1 rounded mt-4"></div>

                <form className="mt-4">
                    <label><span className="text-primary">👤</span> Sélectionner un utilisateur</label>
                    <select className="form-select mt-3">
                        <option value={"-1"}>Tous les utilisateurs</option>
                    </select>
                    <hr className="w-100 mt-4"/>

                    <div>
                        {
                            todos.map(function(todo){
                                return(
                                <article className={`p-3 mt-4 card rounded ${!todo.completed ? "bg-success text-light" : "bg-light"} `}>
                                
                                    <div>
                                        <h5 className={`${!todo.completed ? "text-light" :"text-primary"}`}>Todo #{todo.id}</h5>
                                        <p>{todo.title}</p>
                                    </div>
        
                                    <div>
                                        <p className={`${!todo.completed ? 'btn btn-outline-light' : 'btn btn-outline-primary'}`}>User {todo.userId}</p>
                                    </div>
                                </article>
                                )
                            })
                        }
                    </div>
                </form>

            </div>
            <div className="col-3"></div>
        </div>
    )
}

/*

              <article className="bg-light p-3 mt-4 card rounded">
                            <div>
                                <h5 className="text-primary">test #x</h5>
                                <p>lorem her the her lazy err qui</p>
                            </div>

                            <div>
                                <p className="btn btn-outline-primary">test ID</p>
                            </div>
                        </article>

*/