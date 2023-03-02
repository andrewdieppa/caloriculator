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
      state.meals.find(meal => meal.id === action.payload.mealId).proteinPerc =
        action.payload.macroPerc;
    },
    setCarbPerc: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).carbPerc =
        action.payload.macroPerc;
    },
    setFatPerc: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).fatPerc =
        action.payload.macroPerc;
    },
    setProteinGrams: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).proteinGrams =
        action.payload.macroGrams;
    },
    setCarbGrams: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).carbGrams =
        action.payload.macroGrams;
    },
    setFatGrams: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).fatGrams =
        action.payload.macroGrams;
    },
    autoBalanceMealMacros: (state, action) => {
      let balancedPerc = Number(Math.floor(100 / state.numMeals));

      if (100 % state.numMeals !== 0) {
        let remainder = 100 % state.numMeals;
        if (remainder !== 0) {
          state.meals.forEach(meal => {
            meal.proteinPerc = remainder > 0 ? balancedPerc + 1 : balancedPerc;
            meal.carbPerc = remainder > 0 ? balancedPerc + 1 : balancedPerc;
            meal.fatPerc = remainder > 0 ? balancedPerc + 1 : balancedPerc;

            remainder--;
          });
        } else {
          state.meals.forEach(meal => {
            meal.proteinPerc = balancedPerc;
            meal.carbPerc = balancedPerc;
            meal.fatPerc = balancedPerc;
          });
        }
      }
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
  autoBalanceMealMacros,
} = mealsSlice.actions;

export const actions = mealsSlice.actions;

export default mealsSlice.reducer;
