import { Typography, Slider, Input, Grid, Box } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
import { useSelector, useDispatch } from 'react-redux';
import { setCarbPerc } from '../../store/calorieDataSlice';

const CarbPercentSlider = () => {
  const handleSliderChange = (event, newValue) => {
    //setValue(newValue);
    dispatch(setCarbPerc(newValue));
  };

  const handleInputChange = event => {
    //setValue(event.target.value === '' ? '' : Number(event.target.value));
    dispatch(
      setCarbPerc(event.target.value === '' ? 0 : Number(event.target.value))
    );
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      //setValue(0);
      dispatch(setCarbPerc(0));
    } else if (e.target.value > 100) {
      //setValue(100);
      dispatch(setCarbPerc(100));
    }
  };

  const { carbPerc } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Box sx={{ px: 4, py: 2, border: '1px solid', borderRadius: 1 }}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        Carb <Percent />
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={carbPerc}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={carbPerc}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 5,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CarbPercentSlider;
