import { createSlice } from "@reduxjs/toolkit";

const initialData = {
    tasks : [
        {id : 1, text : "js"},
        {id : 2, text : "php"}
    ]
}

const TaskSlice = createSlice({
    name : "tasks",
    initialState : initialData,
    reducers :{ 
        addTask : (state, action)=>{
            state.tasks.push({id : state.tasks.length + 1, text : action.payload})
        },
        delTask : (state, action)=>{
            const id = action.payload
            state.tasks = state.tasks.filter(task => task.id !== id)
        },
       editTask : (state, action)=>{
            const {id, text} = action.payload
            const editedTask = state.tasks.find(task => task.id === id)
            editedTask.text = text
       }
    }
}
)

export default TaskSlice.reducer
export const {addTask, delTask, editTask} = TaskSlice.actions  /// waaaaa anass