import Counter from '../Reusable/Counter/Counter';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { Paper, Grid } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
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
  const { proteinPerc, carbPerc, fatPerc } = useSelector(
    state => state.calorieData
  );
  const dispatch = useDispatch();

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <SectionTitle variant="h5" component="h4">
        Macro Percentages
      </SectionTitle>
      <Grid container spacing={2} direction="column" alignContent="center">
        <Grid item xs={12}>
          <Counter
            label="Protein"
            value={proteinPerc}
            adornment={<Percent />}
            onDec={dispatch.bind(null, decrementProtein())}
            onInc={dispatch.bind(null, incrementProtein())}
          />
        </Grid>
        <Grid item xs={12}>
          <Counter
            label="Carb"
            value={carbPerc}
            adornment={<Percent />}
            onDec={dispatch.bind(null, decrementCarb())}
            onInc={dispatch.bind(null, incrementCarb())}
          />
        </Grid>
        <Grid item xs={12}>
          <Counter
            label="Fat"
            value={fatPerc}
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
