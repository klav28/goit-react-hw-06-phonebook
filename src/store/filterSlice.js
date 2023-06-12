import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterEntry(state, action) {
      console.log(state);
    },
  },
});

export const { filterEntry } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
