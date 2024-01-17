

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
      console.log("burda 34",  state.address = action.payload)
      state.address = action.payload;
    },
    setLoca: (state, action) => {
      console.log("burda 324",  state.location = action.payload)
      state.location = action.payload;
    },

  },
});

export const { setAddress, setLoca } = locationSlice.actions;

export default locationSlice.reducer;
