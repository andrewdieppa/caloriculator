import { Typography, Slider, Input, Grid, Box } from '@mui/material';
import Percent from '@mui/icons-material/Percent';
import { useSelector, useDispatch } from 'react-redux';
import { setProteinPerc } from '../../store/calorieDataSlice';

const ProteinPercentSlider = ({ color }) => {
  const handleSliderChange = (event, newValue) => {
    dispatch(setProteinPerc(newValue));
  };

  const handleInputChange = event => {
    dispatch(
      setProteinPerc(event.target.value === '' ? 0 : Number(event.target.value))
    );
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      dispatch(setProteinPerc(0));
    } else if (e.target.value > 100) {
      dispatch(setProteinPerc(100));
    }
  };

  const { proteinPerc } = useSelector(state => state.calorieData);
  const dispatch = useDispatch();

  return (
    <Box sx={{ px: 4, py: 2, border: '1px solid', borderRadius: 1 }}>
      <Typography
        sx={{ display: 'flex', alignItems: 'center' }}
        variant="h6"
        id="input-slider"
        gutterBottom
      >
        Protein <Percent />
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={proteinPerc}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color={color}
          />
        </Grid>
        <Grid item>
          <Input
            value={proteinPerc}
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

export default ProteinPercentSlider;
