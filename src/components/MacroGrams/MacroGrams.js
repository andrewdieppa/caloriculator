import { useEffect } from 'react';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import MacroGramsCard from './MacroGramsCard';
import { Paper, Stack, Divider } from '@mui/material';
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
  }, [totalCalories, proteinPerc, carbPerc, fatPerc, dispatch]);

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, py: 1 }}>
      <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
        Macro Grams
      </SectionTitle>
      <Stack
        direction="row"
        padding={1}
        justifyContent="space-evenly"
        alignItems="center"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={{ xs: 1, sm: 2 }}
      >
        <MacroGramsCard macroLetter="P" macroGrams={proteinGrams} />
        <MacroGramsCard macroLetter="C" macroGrams={carbGrams} />
        <MacroGramsCard macroLetter="F" macroGrams={fatGrams} />
      </Stack>
    </Paper>
  );
};

export default MacroGrams;
