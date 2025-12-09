export function Add(){
    return {
        type : "add"
    }
}

export function setTaskName(value){
    return{
        type : "edit_task",
        payload : value
    }
}

export function Del(value){
    return{
        type : "del",
        payload : value
    }
}
