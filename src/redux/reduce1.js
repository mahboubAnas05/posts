const startedData = {
    pName : "",
    Qt : "",
    products : []
}

function reducer( state = startedData, action ){
    switch(action.type){
        case "add" :
            if(!state.pName || !state.Qt) return state

            const newP = {
                id : state.products.length,
                pName : state.pName,
                Qt : state.Qt
            }
            return{
                ...state,
                products : [...state.products, newP],
                pName : "",
                Qt : ""
            }
        
        case "edit_pName" : 
            return{
                ...state,
                pName : action.payload,
            }
        case "edit_Qt" : 
        return {
            ...state, 
            Qt : action.payload
        }
        case "del" :
            return{
                ...state,
                products : state.products.filter(product => product.id !== action.payload)
            }

        default : 
            return state
    }
} 

export default reducer