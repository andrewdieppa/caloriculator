import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import PercentSlider from './PercentSlider';
import { Paper, Box, Stack, Typography, Alert } from '@mui/material';
import { Percent } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';

const MacroPercentages = () => {
  // bring in the state from the store
  const { totalMacroPerc } = useSelector(state => state.calorieData);
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
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, py: 1 }}>
      <Stack spacing={1}>
        <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
          Macro Percentages
        </SectionTitle>
        <PercentSlider macroName={'protein'} color={sliderColor} />
        <PercentSlider macroName={'carb'} color={sliderColor} />
        <PercentSlider macroName={'fat'} color={sliderColor} />
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
