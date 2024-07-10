import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import quantityReducer from "../features/products/cartQuantity"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        quantity:quantityReducer,
    }
})