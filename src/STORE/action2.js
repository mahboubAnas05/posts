// hna kandir le type


export function incre(){
    return{
        type : "incre"
    }
}

export function decre(){
    return{
        type : "decre"
    }
}

export function prod(){
    return{
        type : "prod"
    }
}

export function divi(){
    return{
        type : "divi"
    }
}

export function rest(){
    return{
        type : "rest"
    }
}

export function setNum1(value){
    return {
        type : "setNum1",
        payLoad : Number(value)
    }
}

export function setNum2(value){
    return{
        type : "setNum2",
        payLoad : Number(value)
    }
}