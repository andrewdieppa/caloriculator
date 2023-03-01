import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import PercentSlider from './PercentSlider';
import { Paper, Box, Stack, Typography, Alert, Zoom } from '@mui/material';
import {
  Percent,
  ArrowUpward,
  ArrowDownward,
  ThumbUp,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  setProteinPerc,
  setCarbPerc,
  setFatPerc,
} from '../../store/calorieDataSlice';

const MacroPercentages = () => {
  // bring in the state from the store
  const { totalMacroPerc, proteinPerc, carbPerc, fatPerc } = useSelector(
    state => state.calorieData
  );

  let sliderColor;

  if (totalMacroPerc === 100) {
    sliderColor = 'secondary';
  } else if (totalMacroPerc > 100) {
    sliderColor = 'error';
  } else {
    sliderColor = 'primary';
  }

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, py: 1 }}>
      <SectionTitle variant="h5" component="h4">
        Macro Percentages
      </SectionTitle>
      <Stack spacing={1} sx={{ pb: 1 }}>
        <PercentSlider
          title="Protein"
          macroPerc={proteinPerc}
          setterAction={setProteinPerc}
          color={sliderColor}
        />
        <PercentSlider
          title="Carbs"
          macroPerc={carbPerc}
          setterAction={setCarbPerc}
          color={sliderColor}
        />
        <PercentSlider
          title="Fat"
          macroPerc={fatPerc}
          setterAction={setFatPerc}
          color={sliderColor}
        />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: 1 }}>
            {totalMacroPerc < 100 && <ArrowUpward color="warning" />}
            {totalMacroPerc === 100 && <ThumbUp color="secondary" />}
            {totalMacroPerc > 100 && <ArrowDownward color="error" />}
          </Box>
          <Typography variant="h6" component="h5">
            <Box display={'flex'} alignItems={'center'}>
              Total: {totalMacroPerc} <Percent />
            </Box>
          </Typography>
        </Box>
        {totalMacroPerc < 100 && (
          <Zoom in={totalMacroPerc < 100}>
            <Alert severity="warning">Total percentage too low!</Alert>
          </Zoom>
        )}
        {totalMacroPerc > 100 && (
          <Zoom in={totalMacroPerc > 100}>
            <Alert severity="error">Total percentage too high!</Alert>
          </Zoom>
        )}
      </Stack>
    </Paper>
  );
};

export default MacroPercentages;
