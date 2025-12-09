export function Add(){
    return{
        type : "add"
    }
}

export function setName (value){
    return {
        type : "edit_pName",
        payload : value
    }
}
export function setQt (value){
    return {
        type : "edit_Qt",
        payload : value
    }
}

export function Del(value){
    return{
        type : "del",
        payload : value
    }
}
