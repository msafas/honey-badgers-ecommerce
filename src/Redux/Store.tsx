
import { configureStore } from '@reduxjs/toolkit'
import favoritesSlice from './Slice/favoritesSlice'
import cartSlice from './Slice/cartSlice'
import locationSlice from './Slice/locationSlice'






const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        cart: cartSlice,
        location: locationSlice, 
    }
})

export default store