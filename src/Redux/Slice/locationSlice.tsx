

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  address: '',
  location: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState: initialState,
  reducers: {
    setAddress: (state, action) => {

      state.address = action.payload;
    },
    setLoca: (state, action) => {

      state.location = action.payload;
    },

  },
});

export const { setAddress, setLoca } = locationSlice.actions;

export default locationSlice.reducer;
