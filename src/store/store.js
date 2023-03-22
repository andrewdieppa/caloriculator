import { configureStore } from '@reduxjs/toolkit';
import calorieDataReducer from './calorieDataSlice';
import uiSliceReducer from './uiSlice';
import mealsSliceReducer from './mealsSlice';
import authSliceReducer from './authSlice';

export const store = configureStore({
  reducer: {
    calorieData: calorieDataReducer,
    mealsData: mealsSliceReducer,
    ui: uiSliceReducer,
    auth: authSliceReducer,
  },
});
