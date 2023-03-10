import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import PercentSlider from './PercentSlider';
import ValidIndicator from '../UI/ValidIndicator';
import { Paper, Box, Stack, Typography, Alert, Zoom } from '@mui/material';
import { Percent } from '@mui/icons-material';
import { useSelector } from 'react-redux';
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
            <ValidIndicator validityVar={totalMacroPerc} />
          </Box>
          <Typography variant="h6" component="h5">
            <Box display={'flex'} alignItems={'center'}>
              Total: {totalMacroPerc} <Percent />
            </Box>
          </Typography>
        </Box>
        <Zoom in={totalMacroPerc < 100} unmountOnExit>
          <Alert severity="warning">Total percentage too low!</Alert>
        </Zoom>
        <Zoom in={totalMacroPerc > 100} unmountOnExit>
          <Alert severity="error">Total percentage too high!</Alert>
        </Zoom>
      </Stack>
    </Paper>
  );
};

export default MacroPercentages;
