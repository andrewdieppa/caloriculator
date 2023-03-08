import {
  Paper,
  Typography,
  Slider,
  Input,
  Stack,
  Grid,
  IconButton,
} from '@mui/material';
import {
  Percent,
  ArrowCircleLeft,
  ArrowCircleRight,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';

const PercentSlider = ({ title, macroPerc, setterAction, color }) => {
  const dispatch = useDispatch();
  const stepAmt = 5;

  const handleSliderChange = (event, newValue) => {
    dispatch(setterAction(newValue));
  };

  const handleInputChange = event => {
    dispatch(setterAction(Number(event.target.value)));
  };

  const handleBlur = e => {
    if (e.target.value < 0) {
      dispatch(setterAction(0));
    } else if (e.target.value > 100) {
      dispatch(setterAction(100));
    }
  };

  const handleLeftClick = () => {
    if (macroPerc > 0) {
      const roundedNum = Math.ceil(macroPerc / stepAmt) * stepAmt;
      dispatch(setterAction(roundedNum - stepAmt));
    }
  };

  const handleRightClick = () => {
    if (macroPerc < 100) {
      const roundedNum = Math.floor(macroPerc / stepAmt) * stepAmt;
      dispatch(setterAction(roundedNum + stepAmt));
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
      <Grid container spacing={3} alignItems="center">
        <Grid item xs>
          <Slider
            valueLabelDisplay="auto"
            value={macroPerc}
            onChange={handleSliderChange}
            aria-labelledby={`${title}-input-slider`}
            color={color}
          />
        </Grid>
        <Grid item>
          <Input
            readOnly
            disableUnderline
            value={macroPerc}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              style: { fontWeight: 'bold' },
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': `${title}-input-slider`,
            }}
          />
          <Stack sx={{ display: 'inline-block' }}>
            <IconButton onClick={handleLeftClick}>
              <ArrowCircleLeft fontSize="large" />
            </IconButton>
            <IconButton onClick={handleRightClick}>
              <ArrowCircleRight fontSize="large" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PercentSlider;
