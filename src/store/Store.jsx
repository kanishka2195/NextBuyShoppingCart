import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/ProductSlice"
import CartReducer from "../features/CartSlice"

const store = configureStore({
    reducer:{
        product:ProductReducer,
        cart:CartReducer,
    }
})

export default store;