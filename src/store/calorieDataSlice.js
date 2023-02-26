import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalCalories: 0,
  totalMacroPerc: 0,
  proteinPerc: 0,
  carbPerc: 0,
  fatPerc: 0,
  proteinGrams: 0,
  carbGrams: 0,
  fatGrams: 0,
};

export const calorieDataSlice = createSlice({
  name: 'calorieData',
  initialState,
  reducers: {
    setCalories: (state, action) => {
      state.totalCalories = action.payload;
    },

    setProteinPerc: (state, action) => {
      state.proteinPerc = action.payload;
      state.totalMacroPerc = state.proteinPerc + state.carbPerc + state.fatPerc;
    },

    setCarbPerc: (state, action) => {
      state.carbPerc = action.payload;
      state.totalMacroPerc = state.proteinPerc + state.carbPerc + state.fatPerc;
    },

    setFatPerc: (state, action) => {
      state.fatPerc = action.payload;
      state.totalMacroPerc = state.proteinPerc + state.carbPerc + state.fatPerc;
    },

    setProteinGrams: (state, action) => {
      state.proteinGrams = action.payload;
    },

    setCarbGrams: (state, action) => {
      state.carbGrams = action.payload;
    },

    setFatGrams: (state, action) => {
      state.fatGrams = action.payload;
    },

    setGrams: (state, action) => {
      state.proteinGrams = action.payload[0];
      state.carbGrams = action.payload[1];
      state.fatGrams = action.payload[2];
    },
  },
});

export const {
  setCalories,
  setGrams,
  setProteinPerc,
  setCarbPerc,
  setFatPerc,
  setProteinGrams,
  setCarbGrams,
  setFatGrams,
} = calorieDataSlice.actions;

export const actions = calorieDataSlice.actions;

export default calorieDataSlice.reducer;
