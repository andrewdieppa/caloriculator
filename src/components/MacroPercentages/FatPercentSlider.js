import { Typography, Slider, Input, Grid, Box } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
import { useSelector, useDispatch } from 'react-redux';
import { setFatPerc } from '../../store/calorieDataSlice';

const FatPercentSlider = () => {
  const handleSliderChange = (event, newValue) => {
    //setValue(newValue);
    dispatch(setFatPerc(newValue));
  };

  const handleInputChange = event => {
    //setValue(event.target.value === '' ? '' : Number(event.target.value));
    dispatch(
      setFatPerc(event.target.value === '' ? 0 : Number(event.target.value))
    );
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      //setValue(0);
      dispatch(setFatPerc(0));
    } else if (e.target.value > 100) {
      //setValue(100);
      dispatch(setFatPerc(100));
    }
  };

  const { fatPerc } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Box sx={{ px: 4, py: 2, border: '1px solid', borderRadius: 1 }}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        Fat <Percent />
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={fatPerc}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            value={fatPerc}
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

export default FatPercentSlider;
