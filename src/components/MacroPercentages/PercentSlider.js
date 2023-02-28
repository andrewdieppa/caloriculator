import { Paper, Typography, Slider, Input, Grid } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/calorieDataSlice';

const PercentSlider = ({ title, macroPerc, setterAction, color }) => {
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    dispatch(setterAction(newValue));
  };

  const handleInputChange = event => {
    dispatch(
      setterAction(event.target.value === '' ? 0 : Number(event.target.value))
    );
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      dispatch(setterAction(0));
    } else if (e.target.value > 100) {
      dispatch(setterAction(100));
    }
  };

  return (
    <Paper sx={{ px: 4, py: 2, borderRadius: 1 }} elevation={3}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        {title} <Percent />
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={macroPerc}
            onChange={handleSliderChange}
            aria-labelledby={`${title}-input-slider`}
            color={color}
          />
        </Grid>
        <Grid item>
          <Input
            value={macroPerc}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': `${title}-input-slider`,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PercentSlider;
