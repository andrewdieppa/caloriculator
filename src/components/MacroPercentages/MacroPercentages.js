import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import ProteinPercentSlider from './ProteinPercentSlider';
import CarbPercentSlider from './CarbPercentSlider';
import FatPercentSlider from './FatPercentSlider';
import { Paper, Box, Stack, Typography, Alert } from '@mui/material';
import { Percent } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import TotalCalories from '../TotalCalories/TotalCalories';

const MacroPercentages = () => {
  // bring in the state from the store
  const { proteinPerc, carbPerc, fatPerc, totalMacroPerc } = useSelector(
    state => state.calorieData
  );
  // bring in the dispatch function from the store
  const dispatch = useDispatch();

  let sliderColor;

  if (totalMacroPerc === 100) {
    sliderColor = 'secondary';
  } else if (totalMacroPerc > 100) {
    sliderColor = 'error';
  } else {
    sliderColor = 'primary';
  }

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Stack spacing={1}>
        <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
          Macro Percentages
        </SectionTitle>
        <ProteinPercentSlider color={sliderColor} />
        <CarbPercentSlider color={sliderColor} />
        <FatPercentSlider color={sliderColor} />
        <Typography variant="h6" component="h5">
          <Box display={'flex'} alignItems={'center'}>
            Total: {totalMacroPerc}
            <Percent />
          </Box>
        </Typography>
        {totalMacroPerc > 100 && (
          <Alert severity="warning">Total percentages should equal 100%</Alert>
        )}
      </Stack>
    </Paper>
  );
};

export default MacroPercentages;
