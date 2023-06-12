import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const pbSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addEntry: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(4),
          },
        };
      },
    },
    deleteEntry(state, action) {
      state.filter(entry => entry.id !== action.payload);
    },
  },
});

const { addEntry, deleteEntry } = pbSlice.actions;

const pbReducer = pbSlice.reducer;
