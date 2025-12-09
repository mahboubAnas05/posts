import { createSlice } from "@reduxjs/toolkit"

const inialData = {
    products : [
        {id : 1, text : "stylo", Qt : "100"},
        {id : 2, text : "cahier", Qt : "150"}
        
    ]
}

const productSlice = createSlice({
    name : "products",
    initialState : inialData,
    reducers : {
        addProduct : (state, action) =>{
            state.products.push({id : Date.now(), text : action.payload.text, Qt : action.payload.Qt})
        },
        delProduct : (state, action)=>{
            const id = action.payload
            state.products = state.products.filter(product => product.id !== id)
        }
    }
})

export default productSlice.reducer
export const {addProduct, delProduct} = productSlice.actions