import MacroAvatar from '../UI/MacroAvatar';
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

const MealMacPercSlider = ({
  title,
  macroPerc,
  mealId,
  setterAction,
  color,
}) => {
  const dispatch = useDispatch();
  const stepAmt = 5;

  const letterLabel = title.charAt(0);

  const handleSliderChange = (event, newValue) => {
    dispatch(setterAction({ mealId: mealId, macroPerc: newValue }));
  };

  const handleInputChange = event => {
    const newValue = Number(event.target.value);
    dispatch(setterAction({ mealId: mealId, macroPerc: newValue }));
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
      const newValue = roundedNum - stepAmt;
      dispatch(setterAction({ mealId: mealId, macroPerc: newValue }));
    }
  };

  const handleRightClick = () => {
    if (macroPerc < 100) {
      const roundedNum = Math.floor(macroPerc / stepAmt) * stepAmt;
      const newValue = roundedNum + stepAmt;
      dispatch(setterAction({ mealId: mealId, macroPerc: newValue }));
    }
  };

  return (
    <Grid sx={{ px: 2, py: 1 }} container spacing={3} alignItems="center">
      <Grid item>
        <MacroAvatar avatarLetter={letterLabel} size="small" />
      </Grid>
      <Grid item xs>
        <Slider
          size="small"
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
            <ArrowCircleLeft />
          </IconButton>
          <IconButton onClick={handleRightClick}>
            <ArrowCircleRight />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default MealMacPercSlider;
