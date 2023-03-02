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
  setProteinPercTotal,
  setCarbPerc,
  setCarbPercTotal,
  setFatPerc,
  setFatPercTotal,
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

  const { proteinPercTotal, carbPercTotal, fatPercTotal } = useSelector(
    state => state.mealsData
  );

  useEffect(() => {
    const newCalories = Number(
      meal.proteinGrams * 4 + meal.carbGrams * 4 + meal.fatGrams * 9
    );
    dispatch(setCalories({ mealId: meal.id, calories: newCalories }));
  }, [meal.proteinGrams, meal.carbGrams, meal.fatGrams]);

  useEffect(() => {
    const newMacroValue = Number((meal.proteinPerc / 100) * proteinGrams);
    dispatch(setProteinGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setProteinPercTotal());
  }, [meal.proteinPerc]);

  useEffect(() => {
    const newMacroValue = Number((meal.carbPerc / 100) * carbGrams);
    dispatch(setCarbGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setCarbPercTotal());
  }, [meal.carbPerc]);

  useEffect(() => {
    const newMacroValue = Number((meal.fatPerc / 100) * fatGrams);
    dispatch(setFatGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setFatPercTotal());
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
              macroPercTotal={proteinPercTotal}
              setterAction={setProteinPerc}
              color="primary"
            />
            <MealMacPercSlider
              title={'Carb'}
              mealId={meal.id}
              macroPerc={meal.carbPerc}
              macroPercTotal={carbPercTotal}
              setterAction={setCarbPerc}
              color="primary"
            />
            <MealMacPercSlider
              title={'Fat'}
              mealId={meal.id}
              macroPerc={meal.fatPerc}
              macroPercTotal={fatPercTotal}
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
