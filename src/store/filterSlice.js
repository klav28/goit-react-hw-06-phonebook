import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterEntry(state, action) {
      console.log('filter -> ', action.payload);
    },
  },
});

export const { filterEntry } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
