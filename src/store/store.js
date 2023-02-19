import { configureStore } from '@reduxjs/toolkit';
import calorieDataReducer from './calorieDataSlice';
import uiSliceReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    calorieData: calorieDataReducer,
    ui: uiSliceReducer,
  },
});
