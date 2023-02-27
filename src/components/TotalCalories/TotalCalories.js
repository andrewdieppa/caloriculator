import Counter from '../Reusable/Counter/Counter';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { Paper, Box, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCalories } from '../../store/calorieDataSlice';

const TotalCalories = () => {
  const { totalCalories } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, py: 1, height: 1 }}>
      <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
        Total Caloric Intake
      </SectionTitle>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Paper sx={{ p: 2 }} elevation={3}>
          <TextField
            type="number"
            inputProps={{
              style: { textAlign: 'center' },
              step: 100,
            }}
            InputProps={{
              startAdornment: 'kcal',
            }}
            id="Calories"
            label="Calories"
            variant="outlined"
            size="large"
            value={totalCalories}
            onChange={e => dispatch(setCalories(e.target.value))}
          />
        </Paper>
      </Box>
    </Paper>
  );
};

export default TotalCalories;
