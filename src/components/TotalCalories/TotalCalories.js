import Counter from '../Reusable/Counter/Counter';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { Paper, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCalories,
  decrementCalories,
} from '../../store/calorieDataSlice';

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
        <Counter
          label="Calories"
          value={totalCalories}
          textFieldWidth={150}
          adornment="kcal"
          onDec={dispatch.bind(null, decrementCalories())}
          onInc={dispatch.bind(null, incrementCalories())}
        />
      </Box>
    </Paper>
  );
};

export default TotalCalories;
