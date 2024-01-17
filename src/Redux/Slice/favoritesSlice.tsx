
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteList: [],
};

const favoriSlice = createSlice({
  name: 'favori',
  initialState,
  reducers: {
    toggleFavoriteAction: (state, action) => {
        const item = action.payload;
        const isFavorite = state.favoriteList.some(favoriteItem => favoriteItem.id === item.id);
  
        if (isFavorite) {
          state.favoriteList = state.favoriteList.filter(favoriteItem => favoriteItem.id !== item.id);
        } else {
          state.favoriteList = [...state.favoriteList, item];
        }
      },
    },
  });
export const { toggleFavoriteAction } = favoriSlice.actions;
export default favoriSlice.reducer;
