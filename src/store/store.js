import { configureStore } from '@reduxjs/toolkit';
import calorieDataReducer from './calorieDataSlice';

export const store = configureStore({
  reducer: {
    calorieData: calorieDataReducer,
  },
});
