import Counter from '../Reusable/Counter/Counter';
import { Paper, Grid, Typography } from '@mui/material';
import { Percent } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementProtein,
  incrementCarb,
  incrementFat,
  decrementProtein,
  decrementCarb,
  decrementFat,
} from '../../store/calorieDataSlice';

const MacroPercentages = () => {
  const { protein, carb, fat } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Grid container spacing={1} justifyContent="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h6" component="h4">
            Macro Percentages
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Counter
            label="Protein"
            value={protein}
            adornment={<Percent />}
            onDec={dispatch.bind(null, decrementProtein())}
            onInc={dispatch.bind(null, incrementProtein())}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Counter
            label="Carb"
            value={carb}
            adornment={<Percent />}
            onDec={dispatch.bind(null, decrementCarb())}
            onInc={dispatch.bind(null, incrementCarb())}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Counter
            label="Fat"
            value={fat}
            adornment={<Percent />}
            onDec={dispatch.bind(null, decrementFat())}
            onInc={dispatch.bind(null, incrementFat())}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MacroPercentages;
