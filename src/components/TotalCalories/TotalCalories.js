import Counter from '../Reusable/Counter/Counter';
import { Paper, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementCalories,
  decrementCalories,
} from '../../store/calorieDataSlice';

const TotalCalories = () => {
  const { totalCalories } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Typography variant="h6" component="h4" sx={{ mb: 1 }}>
        Total Caloric Intake
      </Typography>
      <Counter
        label="Calories"
        value={totalCalories}
        textFieldWidth={150}
        adornment="kcal"
        onDec={dispatch.bind(null, decrementCalories())}
        onInc={dispatch.bind(null, incrementCalories())}
      />
    </Paper>
  );
};

export default TotalCalories;
