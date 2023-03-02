import { useEffect } from 'react';
import MealMacPercSlider from './MealMacPercSlider';
import MacroChip from './MacroChip';
import {
  Typography,
  Paper,
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import {
  setProteinPerc,
  setCarbPerc,
  setFatPerc,
  setProteinGrams,
  setCarbGrams,
  setFatGrams,
  setCalories,
} from '../../store/mealsSlice';

const Meal = ({ meal }) => {
  const dispatch = useDispatch();

  const { proteinGrams, carbGrams, fatGrams } = useSelector(
    state => state.calorieData
  );

  useEffect(() => {
    const newMacroValue = Number((meal.proteinPerc / 100) * proteinGrams);
    dispatch(setProteinGrams({ mealId: meal.id, macroGrams: newMacroValue }));
  }, [meal.proteinPerc]);

  useEffect(() => {
    const newMacroValue = Number((meal.carbPerc / 100) * carbGrams);
    dispatch(setCarbGrams({ mealId: meal.id, macroGrams: newMacroValue }));
  }, [meal.carbPerc]);

  useEffect(() => {
    const newMacroValue = Number((meal.fatPerc / 100) * fatGrams);
    dispatch(setFatGrams({ mealId: meal.id, macroGrams: newMacroValue }));
  }, [meal.fatPerc]);

  return (
    <Paper>
      <Typography textAlign={'center'} variant={'h6'} component="h5">
        {meal.name}
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
        <Stack direction={'row'} justifyContent="space-around" marginBottom={2}>
          <MacroChip avatarLetter="P" macroGrams={+meal.proteinGrams} />
          <MacroChip avatarLetter="C" macroGrams={+meal.carbGrams} />
          <MacroChip avatarLetter="F" macroGrams={+meal.fatGrams} />
        </Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography fontWeight={'bold'}>
            {meal.calories.toFixed(0)} kcal
          </Typography>
        </Box>
      </Paper>
      <Accordion disableGutters>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Meal Macro Percentages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack>
            <MealMacPercSlider
              title={'Protein'}
              mealId={meal.id}
              macroPerc={meal.proteinPerc}
              setterAction={setProteinPerc}
              color="primary"
            />
            <MealMacPercSlider
              title={'Carb'}
              mealId={meal.id}
              macroPerc={meal.carbPerc}
              setterAction={setCarbPerc}
              color="primary"
            />
            <MealMacPercSlider
              title={'Fat'}
              mealId={meal.id}
              macroPerc={meal.fatPerc}
              setterAction={setFatPerc}
              color="primary"
            />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};

export default Meal;
