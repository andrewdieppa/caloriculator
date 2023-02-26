import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCalories: 0,
  proteinPerc: 0,
  carbPerc: 0,
  fatPerc: 0,
  proteinGrams: 0,
  carbGrams: 0,
  fatGrams: 0,
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
    setCalories: (state, action) => {
      state.totalCalories = action.payload;
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
    setGrams: (state, action) => {
      state.proteinGrams = action.payload[0];
      state.carbGrams = action.payload[1];
      state.fatGrams = action.payload[2];
    },
  },
});

export const {
  incrementCalories,
  incrementProtein,
  setCalories,
  incrementCarb,
  incrementFat,
  decrementCalories,
  decrementProtein,
  decrementCarb,
  decrementFat,
  setGrams,
} = calorieDataSlice.actions;

export const actions = calorieDataSlice.actions;

export default calorieDataSlice.reducer;
