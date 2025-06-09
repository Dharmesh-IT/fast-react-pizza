import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Margherita",
      unitPrice: 10,
      quantity: 2,
      totalPrice: 20,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({
        pizzaId: action.payload.pizzaId,
        name: action.payload.name,
        unitPrice: action.payload.unitPrice,
        quantity: action.payload.quantity,
        totalPrice: action.payload.unitPrice * action.payload.quantity,
      });
    },
    deleteItem(state, action) {
      //payload  is the pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity += action.payload.quantity;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId === action.payload.pizzaId,
      );
      if (item) {
        item.quantity -= action.payload.quantity;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(
            (item) => item.pizzaId !== action.payload.pizzaId,
          );
        } else {
          item.totalPrice = item.unitPrice * item.quantity;
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
