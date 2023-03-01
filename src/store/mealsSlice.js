import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [
    {
      id: 1,
      name: 'Breakfast',
      calories: 0,
      proteinPerc: 0,
      carbPerc: 0,
      fatPerc: 0,
      proteinGrams: 0,
      carbGrams: 0,
      fatGrams: 0,
    },
    {
      id: 2,
      name: 'Lunch',
      calories: 0,
      proteinPerc: 0,
      carbPerc: 0,
      fatPerc: 0,
      proteinGrams: 0,
      carbGrams: 0,
      fatGrams: 0,
    },
    {
      id: 3,
      name: 'Dinner',
      calories: 0,
      proteinPerc: 0,
      carbPerc: 0,
      fatPerc: 0,
      proteinGrams: 0,
      carbGrams: 0,
      fatGrams: 0,
    },
  ],
  numMeals: 3,
};

export const mealsSlice = createSlice({
  name: 'mealsData',
  initialState,
  reducers: {
    updateMealCalories: (state, action) => {
      state.meals.forEach(meal => {
        meal.calories = action.payload / state.numMeals;
      });
    },
    setProteinPerc: (state, action) => {
      state.meals[action.payload.mealId].proteinPerc =
        action.payload.proteinPerc;
    },
    setCarbPerc: (state, action) => {
      state.meals[action.payload.mealId].carbPerc = action.payload.carbPerc;
    },
    setFatPerc: (state, action) => {
      state.meals[action.payload.mealId].fatPerc = action.payload.fatPerc;
    },
    updateMealMacros: (state, action) => {
      state.meals.forEach(meal => {
        meal.proteinGrams = action.payload.pGrams / state.numMeals;
        meal.carbGrams = action.payload.cGrams / state.numMeals;
        meal.fatGrams = action.payload.fGrams / state.numMeals;
      });
    },
  },
});

export const {
  setCalories,
  setProteinPerc,
  setCarbPerc,
  setFatPerc,
  setProteinGrams,
  setCarbGrams,
  setFatGrams,
  updateMealCalories,
  updateMealMacros,
} = mealsSlice.actions;

export const actions = mealsSlice.actions;

export default mealsSlice.reducer;
