import EditButtonBar from './EditButtonBar';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import {
  Stack,
  Paper,
  Chip,
  Avatar,
  Typography,
  Box,
  Button,
  Grid,
} from '@mui/material';
import MacroChip from './MacroChip';
import MealsList from './MealsList';
import { useSelector, useDispatch } from 'react-redux';
import { autoBalanceMealMacros } from '../../store/mealsSlice';
import { toggleAddMealModal } from '../../store/uiSlice';

const Meals = () => {
  const dispatch = useDispatch();

  const { meals, numMeals } = useSelector(state => state.mealsData);

  const { totalCalories, proteinGrams, carbGrams, fatGrams } = useSelector(
    state => state.calorieData
  );

  return (
    <Paper
      sx={{
        position: 'relative',
        bgcolor: 'background.paperVariant',
        px: 2,
        pt: 1,
        pb: 2,
      }}
    >
      <Button
        sx={{ position: 'absolute', right: '15px', top: '6px' }}
        size="small"
        onClick={() => dispatch(autoBalanceMealMacros())}
      >
        Auto Balance
      </Button>
      <SectionTitle variant="h5" component="h4">
        Meals
      </SectionTitle>
      <EditButtonBar />
      <MealsList meals={meals} />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => dispatch(toggleAddMealModal())}
        >
          Add Meal
        </Button>
      </Box>
    </Paper>
  );
};

export default Meals;
