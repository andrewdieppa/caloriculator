import Counter from '../Reusable/Counter/Counter';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { Paper, Box, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setCalories } from '../../store/calorieDataSlice';

const TotalCalories = () => {
  const { totalCalories } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ px: 2, py: 1, height: 1 }}>
      <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
        Total Caloric Intake
      </SectionTitle>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
          size="small"
          value={totalCalories}
          onChange={e => dispatch(setCalories(e.target.value))}
        />
      </Box>
    </Paper>
  );
};

export default TotalCalories;
