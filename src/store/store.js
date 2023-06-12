import { configureStore } from '@reduxjs/toolkit';
import { pbReducer } from './pbSlice';
import { filterReducer } from './filterSlice';

export default configureStore({
  reducer: {
    phonebook: pbReducer,
    filter: filterReducer,
  },
});
