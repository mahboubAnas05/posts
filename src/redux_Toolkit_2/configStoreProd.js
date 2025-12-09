import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";

const storeOfProduct = configureStore({
    reducer : {
        products_store : productReducer
    }
})

export default storeOfProduct