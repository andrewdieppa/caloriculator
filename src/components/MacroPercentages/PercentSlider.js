import { Typography, Slider, Input, Grid, Box } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../store/calorieDataSlice';

const PercentSlider = ({ macroName, color }) => {
  const capMacroName = macroName.charAt(0).toUpperCase() + macroName.slice(1);

  const macroPerc = useSelector(state => state.calorieData[`${macroName}Perc`]);
  const dispatch = useDispatch();

  const handleSliderChange = (event, newValue) => {
    dispatch(actions[`set${capMacroName}Perc`](newValue));
  };

  const handleInputChange = event => {
    dispatch(
      actions[`set${capMacroName}Perc`](
        event.target.value === '' ? 0 : Number(event.target.value)
      )
    );
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      dispatch(actions[`set${capMacroName}Perc`](0));
    } else if (e.target.value > 100) {
      dispatch(actions[`set${capMacroName}Perc`](100));
    }
  };

  return (
    <Box sx={{ px: 4, py: 2, border: '1px solid', borderRadius: 1 }}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        {capMacroName} <Percent />
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={macroPerc}
            onChange={handleSliderChange}
            aria-labelledby={`${macroName}-input-slider`}
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
              'aria-labelledby': `${macroName}-input-slider`,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PercentSlider;
