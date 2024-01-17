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
    
      // Sepete eklenen tüm ürünlerin fiyatını topla
      state.totalAllItemsPrice = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      console.log("burda 34")
      const itemIdToRemove = action.payload;
      const itemToRemove = state.cartItems.find(item => item.id === itemIdToRemove.id);
      console.log(itemIdToRemove, "itemToRemove")
    
      if (itemToRemove) {
        console.log("burda 36")
        if (itemToRemove.quantity > 1) {
          console.log("burda 38")
          itemToRemove.quantity -= 1;
          state.totalAllItemsPrice -= itemToRemove.price; // Miktar azaltıldığında sadece ürün fiyatını düşürün.
        } else {
          console.log("burda 42")
          state.cartItems = state.cartItems.filter(item => item.id !== itemIdToRemove.id);
          state.totalAllItemsPrice -= itemToRemove.price; // Ürün tamamen kaldırıldığında sadece ürün fiyatını düşürün.
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
