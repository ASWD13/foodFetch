import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      state.cart = { ...state.cart, [action.payload.id]: action.payload.data };
    },
    updateCart: (state, action) => {
      state.cart = {
        ...state.cart,
        [action.payload.cartId]: action.payload.attributes,
      };
    },
  },
});

export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
