import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  proteinPerc: 0,
  carbPerc: 0,
  fatPerc: 0,
};

const stepAmount = 5;

const percStepIsValid = (prot, carb, fat) => {
  return prot + carb + fat + stepAmount <= 100;
};

export const calorieDataSlice = createSlice({
  name: 'calorieData',
  initialState,
  reducers: {
    incrementProtein: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.proteinPerc += stepAmount;
      }
    },
    decrementProtein: state => {
      if (state.proteinPerc - stepAmount >= 0) {
        state.proteinPerc -= stepAmount;
      }
    },
    incrementCarb: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.carbPerc += stepAmount;
      }
    },
    decrementCarb: state => {
      if (state.carbPerc - stepAmount >= 0) {
        state.carbPerc -= stepAmount;
      }
    },
    incrementFat: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.fatPerc += stepAmount;
      }
    },
    decrementFat: state => {
      if (state.fatPerc - stepAmount >= 0) {
        state.fatPerc -= stepAmount;
      }
    },
  },
});

export const {
  incrementProtein,
  decrementProtein,
  incrementCarb,
  decrementCarb,
  incrementFat,
  decrementFat,
} = calorieDataSlice.actions;

export const actions = calorieDataSlice.actions;

export default calorieDataSlice.reducer;
