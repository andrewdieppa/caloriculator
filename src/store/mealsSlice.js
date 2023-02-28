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
};

export const mealsSlice = createSlice({
  name: 'mealsData',
  initialState,
  reducers: {
    setCalories: (state, action) => {
      state.mealsList[action.payload.mealId].calories = action.payload.calories;
    },
    setProteinPerc: (state, action) => {
      state.mealsList[action.payload.mealId].proteinPerc =
        action.payload.proteinPerc;
    },
    setCarbPerc: (state, action) => {
      state.mealsList[action.payload.mealId].carbPerc = action.payload.carbPerc;
    },
    setFatPerc: (state, action) => {
      state.mealsList[action.payload.mealId].fatPerc = action.payload.fatPerc;
    },
  },
});

export const { setCalories, setProteinPerc, setCarbPerc, setFatPerc } =
  mealsSlice.actions;

export const actions = mealsSlice.actions;

export default mealsSlice.reducer;
