import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    totalCartPrice: 0,
  };
  

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(item => item.id === newItem.id);
    
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...newItem, quantity: 1 });
      }
    
      state.totalCartPrice += newItem.price;
      state.totalAllItemsPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {

      const itemIdToRemove = action.payload;
      const itemToRemove = state.cartItems.find(item => item.id === itemIdToRemove.id);

    
      if (itemToRemove) {

        if (itemToRemove.quantity > 1) {

          itemToRemove.quantity -= 1;
          state.totalAllItemsPrice -= itemToRemove.price; 
        } else {

          state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove.id);
          state.totalAllItemsPrice -= itemToRemove.price; 
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAllItemsPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
