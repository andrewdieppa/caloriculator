import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCalories: 0,
  proteinPerc: 0,
  carbPerc: 0,
  fatPerc: 0,
};

const macroStepAmount = 5;
const calorieStepAmount = 100;

const percStepIsValid = (prot, carb, fat) => {
  return prot + carb + fat + macroStepAmount <= 100;
};

export const calorieDataSlice = createSlice({
  name: 'calorieData',
  initialState,
  reducers: {
    incrementCalories: state => {
      state.totalCalories += calorieStepAmount;
    },
    decrementCalories: state => {
      if (state.totalCalories - calorieStepAmount >= 0) {
        state.totalCalories -= calorieStepAmount;
      }
    },
    incrementProtein: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.proteinPerc += macroStepAmount;
      }
    },
    decrementProtein: state => {
      if (state.proteinPerc - macroStepAmount >= 0) {
        state.proteinPerc -= macroStepAmount;
      }
    },
    incrementCarb: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.carbPerc += macroStepAmount;
      }
    },
    decrementCarb: state => {
      if (state.carbPerc - macroStepAmount >= 0) {
        state.carbPerc -= macroStepAmount;
      }
    },
    incrementFat: state => {
      if (percStepIsValid(state.proteinPerc, state.carbPerc, state.fatPerc)) {
        state.fatPerc += macroStepAmount;
      }
    },
    decrementFat: state => {
      if (state.fatPerc - macroStepAmount >= 0) {
        state.fatPerc -= macroStepAmount;
      }
    },
  },
});

export const {
  incrementCalories,
  incrementProtein,
  incrementCarb,
  incrementFat,
  decrementCalories,
  decrementProtein,
  decrementCarb,
  decrementFat,
} = calorieDataSlice.actions;

export const actions = calorieDataSlice.actions;

export default calorieDataSlice.reducer;
