import { useEffect } from 'react';
import { Stack, Paper, Chip, Avatar, Typography, Box } from '@mui/material';
import MacroChip from './MacroChip';
import MealsList from './MealsList';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { useSelector, useDispatch } from 'react-redux';
import { updateMealMacros, updateMealCalories } from '../../store/mealsSlice';

const Meals = () => {
  const dispatch = useDispatch();

  const { meals, numMeals } = useSelector(state => state.mealsData);

  const { totalCalories, proteinGrams, carbGrams, fatGrams } = useSelector(
    state => state.calorieData
  );

  useEffect(() => {
    dispatch(updateMealCalories(totalCalories));
  }, [proteinGrams, carbGrams, fatGrams]);

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, pt: 1, pb: 2 }}>
      <SectionTitle variant="h5" component="h4">
        Meals
      </SectionTitle>
      <MealsList meals={meals} />
      {/* End of Future Meal component */}
    </Paper>
  );
};

export default Meals;
