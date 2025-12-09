import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskSlice";


const store = configureStore({
    reducer :  {
        tasks_store : tasksReducer
    }
})

export default store