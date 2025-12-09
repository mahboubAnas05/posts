import { useState } from "react"

function CounterCom(){

  
  
  const [tasks, setTasks] = useState([])
  const [task, setTask] = useState("")
  const [error, setError] = useState("")


  function handelClick(){
      if(!task) {
        setError("veuillez remplir les champs !!!")
        return
      }

    const newTask = {
      id : tasks.length,
      nameT : task
    }

    setTasks([...tasks, newTask])

    setTask("")

  }

  function handelDelete(id){
      const filtredTask = tasks.filter(function(task){
        return task.id !== id
      })
      setTasks(filtredTask)
  }





    return(
        <center>
            <h1 className="mt-3 text-capitalize">gestion des tàches</h1>
          <div className="d-flex mx-3 justify-content-center gap-1">
            <input  value={task} onChange={(e)=>setTask(e.target.value)} type="text" className="form-control" placeholder="Entrer une nouvelle tàche..."/>
            <button onClick={handelClick} className="btn btn-outline-primary">Ajouter</button>
          </div>
            {!task && <p className="text-danger">{error}</p>}
          <div className="mx-3">

            <article className="mt-3">

              {
                tasks.map(function(task, index){
                  return(
                    <div key={index} className="d-flex justify-content-between p-3">
                      <div>{task.nameT}</div>
                      <div>
                        <button className="btn btn-secondary me-1">Modifier</button>
                        <button onClick={() => handelDelete(task.id)} className="btn btn-danger">Supprimer</button>
                      </div>
                  </div>
                  )
                })
              }
                
            </article>
           
          </div>
        </center>
    )
}

export default CounterCom


/*

                <div className="d-flex justify-content-between p-3">
                  <div>js</div>
                  <div>
                    <button className="btn btn-secondary me-1">Modifier</button>
                    <button className="btn btn-danger">Supprimer</button>
                  </div>
                </div>

*/
