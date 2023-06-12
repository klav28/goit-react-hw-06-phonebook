import { createSlice, nanoid } from '@reduxjs/toolkit';

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

const { filterEntry } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
