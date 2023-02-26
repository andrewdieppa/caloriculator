import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import ProteinPercentSlider from './ProteinPercentSlider';
import CarbPercentSlider from './CarbPercentSlider';
import FatPercentSlider from './FatPercentSlider';
import { Paper, Stack } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

const MacroPercentages = () => {
  // bring in the state from the store
  const { proteinPerc, carbPerc, fatPerc } = useSelector(
    state => state.calorieData
  );
  // bring in the dispatch function from the store
  const dispatch = useDispatch();

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Stack spacing={1}>
        <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
          Macro Percentages
        </SectionTitle>
        <ProteinPercentSlider />
        <CarbPercentSlider />
        <FatPercentSlider />
      </Stack>
    </Paper>
  );
};

export default MacroPercentages;
