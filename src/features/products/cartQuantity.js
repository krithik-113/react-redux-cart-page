import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

export const quantitySlice = createSlice({
  name: "quantity",
  initialState,
  reducers: {
    quantityIncrement: (state, action) => {
      state.count += 1 
      state.price = state.price * action.payload
    } ,
    quantityDecrement: (state, action) => {
      state.count = state.count ? state.count -= 1 : 0
    },
    reset: (state) => {
      state.count = 0
    }
  },
});
export const quantityValue = state => state.quantity.count
export const {reset, quantityIncrement, quantityDecrement } = quantitySlice.actions;

export default quantitySlice.reducer