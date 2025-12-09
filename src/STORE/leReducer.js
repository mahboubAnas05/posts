import { retry } from "@reduxjs/toolkit/query"

const intialData = {
    taskName : "", 
    tasks : [] // ya3ni a7Aja khasha tkoun haka
}

function reducer(state = intialData, action){
    switch(action.type){
        // cas 1
        case "add" : 
        if(!state.taskName.trim()){
            return state
        }

        const newTask = {
            id : state.tasks.length,
            taskName : state.taskName
        }
        return {
            ...state,
            // fblast : setArray([...array, newObject]) kadir:
            tasks : [...state.tasks, newTask],
            // fblast : setVariable("") kadir:
            taskName : ""
        }
        // cas 2
        case "edit_task" :
            return{
                ...state,
                taskName : action.payload
            }

        // cas 3 
        case "del" : 
            const  filteredTasks = state.tasks.filter(function(task){
                return action.payload !== task.id
            })
            return {
                ...state, 
                tasks : filteredTasks
            }
        case "edit" : 

        // cas  (else)
        default : 
            return state
    }
}

export default reducer