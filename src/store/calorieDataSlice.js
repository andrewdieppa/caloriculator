import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  protein: 0,
  carb: 0,
  fat: 0,
};

const stepAmount = 5;

export const calorieDataSlice = createSlice({
  name: 'calorieData',
  initialState,
  reducers: {
    incrementProtein: state => {
      state.protein += stepAmount;
    },
    decrementProtein: state => {
      state.protein -= stepAmount;
    },
    incrementCarb: state => {
      state.carb += stepAmount;
    },
    decrementCarb: state => {
      state.carb -= stepAmount;
    },
    incrementFat: state => {
      state.fat += stepAmount;
    },
    decrementFat: state => {
      state.fat -= stepAmount;
    },
  },
});

export const {
  setProtein,
  incrementProtein,
  decrementProtein,
  setCarb,
  incrementCarb,
  decrementCarb,
  setFat,
  incrementFat,
  decrementFat,
} = calorieDataSlice.actions;

export const actions = calorieDataSlice.actions;

export default calorieDataSlice.reducer;
