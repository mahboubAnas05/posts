import { useEffect, useState } from 'react';
import axios from "axios";


function App(){

  const [tasks, setTasks] = useState([])
  const [text, setText] = useState("")

  function handelClick(){ 
    
    if(!text) return

    const newTask = {
      id : (tasks.length + 1).toString(), //generate the id
      nom : text,
      status : false
    }
    /* 
      **** that's will be back end syntax by axios ****
    setTasks([...tasks, newTask])
    
    setText("")
    */
   
   
   // send to the server posting a request
   axios.post("http://localhost:4000/tasks", newTask) // i said send 'newTask' to the URL the meaning is'nt strong


   // --[dakchi dial ajouter supprimer  illi kanti kadirha fCrud 3adia ghadi tkhchihoum f 'then()']--

   .then(()=>{ // than mean what's after the previous syntax or in author mean what i have to do after sending 'newTask' to the URL
      setTasks([...tasks, newTask]) // add to screen 
      setText("") // clean the entry
      // alert("added") // show this message after ending
    })
    .catch(() =>{ // i said if the send did'nt success do that
      alert("not added")
    })
    

  }
   function hundelDelete(id){
      /*
      that's will be inside of the axios :
        setTasks(tasks.filter(function(task){
        return task.id !== id
      }))
      */
     axios.delete(`http://localhost:4000/tasks/${id}`)
     .then(()=>{
        setTasks(tasks.filter(function(task){
        return task.id !== id
      }))
     })
   }

  // here you'll get the responce by 'useEffect()'
   // useEffecte fiha function callBack
  useEffect(()=>{
    axios.get("http://localhost:4000/tasks")
    .then((responce)=>{
      setTasks(responce.data) // fill tasks from the server
    })
    .catch(()=>{
      console.log("error !!!")
    })
  }, []) // ⚠️ Runs when tasks change 
  // i said to it:  when the static data change "tasks" run i mean exicute the useEffect
   

  return(
    
  <div className='p-3 vh-100' style={{"background" : "linear-gradient(to right,rgb(8, 16, 54), #0567a8,rgb(255, 0, 179))"}}>
      <h1 className='text-center text-capitalize mt-2 text-light fw-bold'>gestion des taches</h1>
    <div>

      <input type='text' value={text} onChange={(e)=>setText(e.target.value)} className='form-control mt-2' placeholder='Entrer le du tache'/>
      <input onClick={handelClick} type='button' style={{"backgroundColor" : "#132d46"}} className='btn text-light w-100 mt-2' value={"Ajouter"}/>

    </div>

    <div className={`${tasks.length === 0 ? "mt-5 " : "mt-3"}`} >
        
        {
          tasks.length === 0 ?
          <p className='text-light text-center p-3'>aucune tache</p>
          :
          tasks.map((task, index) => {
            return(
            <div key={index} className='mt-3 p-3 border rounded d-flex justify-content-between' style={{"background" : "linear-gradient(to right,rgb(8, 16, 54),rgb(88, 188, 255),rgb(255, 140, 220))", "boxShadow" : "6px 2px 1rem 0.5px rgba(255, 255, 255, 1)"}}>
              <h2 className='text-light'>{task.nom}</h2>
              <button onClick={()=>hundelDelete(task.id)} className='btn btn-danger'>X</button>
            </div>
            )
          })

        }
  
        </div>
  

  </div>


)
}

// this function is correcte but wont working because it have a basics just for understanding

const Amadfhie = () =>{
    const [array, setArray] = useState([])
    const [text, setText] = useState("")

    function handelClick(){

      if(!text) return

      const object = {
        id : array.length + 1,
        text : text,
        status : false
      }
      
      axios.post('http//localhast/4000/array', object) // that URL is imaginate is'nt the real for knowing
      .then(()=>{
        setArray([...array, object])
        setText("")
      })
      .catch(()=>{
        alert()
      })


      
    }

    function handelDelete(id){
      axios.delete("http//localhast/4000/array")
      .then(()=>{
          setArray(array.filter(function(ray){
            return ray.id !== id
          }))
      })
    }
    
//useEffect will be u=outside of the function handelClick for this situation 
// then in useEffect have a prametre responce 

useEffect(()=>{
  axios.get("http//localhast/4000/array")
  .then((responce)=>{
      setArray(responce.data) // date is a varilable wajd dialhoum
  })
  .catch(()=>{
    alert("error into hadik")
  })
}, [])

    return(
      <div>
          <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/>

          <button onClick={handelClick}>ajouter</button>

          <div className='mt-5'>
              {
                array.map(function(ray){
                  return(
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>{ray.text}</div>
                      <div>
                        <button onClick={()=>handelDelete(ray.id)} className='btn btn-danger'>delete</button>
                      </div>
                    </div>
                  )
                })
              }
          </div>

      </div>
    )
}