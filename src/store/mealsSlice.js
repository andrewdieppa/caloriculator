import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  meals: [
    {
      id: 1,
      order: 1,
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
      order: 2,
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
      order: 3,
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
  proteinPercTotal: 0,
  carbPercTotal: 0,
  fatPercTotal: 0,
};

export const mealsSlice = createSlice({
  name: 'mealsData',
  initialState,
  reducers: {
    setCalories: (state, action) => {
      state.meals.find(meal => meal.id === action.payload.mealId).calories =
        action.payload.calories;
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
    setProteinPercTotal: state => {
      const percTotal = state.meals.reduce((acc, meal) => {
        return acc + meal.proteinPerc;
      }, 0);

      state.proteinPercTotal = percTotal;
    },
    setCarbPercTotal: state => {
      const percTotal = state.meals.reduce((acc, meal) => {
        return acc + meal.carbPerc;
      }, 0);

      state.carbPercTotal = percTotal;
    },
    setFatPercTotal: state => {
      const percTotal = state.meals.reduce((acc, meal) => {
        return acc + meal.fatPerc;
      }, 0);

      state.fatPercTotal = percTotal;
    },
    autoBalanceMealMacros: state => {
      let balancedPerc = Number(Math.floor(100 / state.numMeals));

      if (100 % state.numMeals !== 0) {
        let remainder = 100 % state.numMeals;
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
    },
    moveMealUp: (state, action) => {
      const selectedMeal = state.meals.find(meal => meal.id === action.payload);
      if (selectedMeal.order === 1) return;

      const adjacentMeal = state.meals.find(
        meal => meal.order === selectedMeal.order - 1
      );

      selectedMeal.order--;
      adjacentMeal.order++;

      state.meals.sort((a, b) => a.order - b.order);
    },
    moveMealDown: (state, action) => {
      const selectedMeal = state.meals.find(meal => meal.id === action.payload);
      if (selectedMeal.order === state.numMeals) return;

      const adjacentMeal = state.meals.find(
        meal => meal.order === selectedMeal.order + 1
      );

      selectedMeal.order++;
      adjacentMeal.order--;

      state.meals.sort((a, b) => a.order - b.order);
    },
    addMeal: (state, action) => {
      state.numMeals++;
      state.meals.push({
        id: state.numMeals,
        order: state.numMeals,
        name: `${action.payload}`,
        calories: 0,
        proteinPerc: 0,
        carbPerc: 0,
        fatPerc: 0,
        proteinGrams: 0,
        carbGrams: 0,
        fatGrams: 0,
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
  setProteinPercTotal,
  setCarbPercTotal,
  setFatPercTotal,
  updateMealCalories,
  updateMealMacros,
  autoBalanceMealMacros,
  moveMealUp,
  moveMealDown,
  addMeal,
} = mealsSlice.actions;

export const actions = mealsSlice.actions;

export default mealsSlice.reducer;
