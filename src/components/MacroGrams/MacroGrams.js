import { useEffect } from 'react';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { Typography, Paper, Stack, Divider } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setGrams } from '../../store/calorieDataSlice';

const MacroGrams = () => {
  const calculateGrams = (cals, proteinPerc, carbPercent, fatPercent) => {
    const proteinGrams = (cals * (proteinPerc / 100)) / 4;
    const carbGrams = (cals * (carbPercent / 100)) / 4;
    const fatGrams = (cals * (fatPercent / 100)) / 9;
    return [proteinGrams, carbGrams, fatGrams];
  };

  const {
    totalCalories,
    proteinPerc,
    carbPerc,
    fatPerc,
    proteinGrams,
    carbGrams,
    fatGrams,
  } = useSelector(state => state.calorieData);

  const dispatch = useDispatch();

  useEffect(() => {
    const grams = calculateGrams(totalCalories, proteinPerc, carbPerc, fatPerc);
    dispatch(setGrams(grams));
  }, [totalCalories, proteinPerc, carbPerc, fatPerc]);

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
        Macro Grams
      </SectionTitle>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-evenly"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Typography variant="h6" component="h5">
          Protein: {proteinGrams.toFixed(0)}g
        </Typography>
        <Typography variant="h6" component="h5">
          Carb: {carbGrams.toFixed(0)}g
        </Typography>
        <Typography variant="h6" component="h5">
          Fat: {fatGrams.toFixed(0)}g
        </Typography>
      </Stack>
    </Paper>
  );
};

export default MacroGrams;
