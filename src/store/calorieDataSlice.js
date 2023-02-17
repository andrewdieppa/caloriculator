import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  protein: 0,
  carb: 0,
  fat: 0,
};

export const calorieDataSlice = createSlice({
  name: 'calorieData',
  initialState,
  reducers: {
    incrementProtein: state => {
      state.protein += 5;
    },
    decrementProtein: state => {
      state.protein -= 5;
    },
    incrementCarb: state => {
      state.carb += 5;
    },
    decrementCarb: state => {
      state.carb -= 5;
    },
    incrementFat: state => {
      state.fat += 5;
    },
    decrementFat: state => {
      state.fat -= 5;
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
