import { useEffect } from 'react';
import { Stack, Paper, Chip, Avatar, Typography, Box } from '@mui/material';
import MacroChip from './MacroChip';
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
    dispatch(
      updateMealMacros({
        pGrams: proteinGrams,
        cGrams: carbGrams,
        fGrams: fatGrams,
      })
    );

    dispatch(updateMealCalories(totalCalories));
  }, [proteinGrams, carbGrams, fatGrams]);

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, pt: 1, pb: 2 }}>
      <SectionTitle variant="h5" component="h4">
        Meals
      </SectionTitle>
      <Stack spacing={2}>
        {/* Future Meal component */}
        <Paper>
          <Typography textAlign={'center'} variant={'h6'} component="h5">
            {meals[0].name}
          </Typography>
          <Paper
            sx={{
              bgcolor: 'background.paperVariant',
              mx: 2,
              my: 1,
              px: 4,
              py: 2,
            }}
          >
            <Stack
              direction={'row'}
              justifyContent="space-around"
              marginBottom={2}
            >
              <MacroChip avatarLetter="P" macroGrams={meals[0].proteinGrams} />
              <MacroChip avatarLetter="C" macroGrams={meals[0].carbGrams} />
              <MacroChip avatarLetter="F" macroGrams={meals[0].fatGrams} />
            </Stack>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography fontWeight={'bold'}>
                {meals[0].calories.toFixed(0)} kcal
              </Typography>
            </Box>
          </Paper>
        </Paper>
      </Stack>
      {/* End of Future Meal component */}
    </Paper>
  );
};

export default Meals;
