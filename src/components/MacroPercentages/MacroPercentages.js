import { useReducer } from 'react';
import {
  Paper,
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';
import { Percent, Add, Remove } from '@mui/icons-material';

// go to https://mui.com/material-ui/react-text-field/#components
// to further investigate TextField customization

const macroReducer = (state, action) => {
  // fancy state stuff
  switch (action.type) {
    case 'SET_PROTEIN':
      return { ...state, protein: action.payload };

    case 'INCREMENT_PROTEIN':
      return { ...state, protein: state.protein + 5 };

    case 'DECREMENT_PROTEIN':
      return { ...state, protein: state.protein - 5 };

    case 'SET_CARB':
      return { ...state, carb: action.payload };

    case 'INCREMENT_CARB':
      return { ...state, carb: state.carb + 5 };

    case 'DECREMENT_CARB':
      return { ...state, carb: state.carb - 5 };

    case 'SET_FAT':
      return { ...state, fat: action.payload };

    case 'INCREMENT_FAT':
      return { ...state, fat: state.fat + 5 };

    case 'DECREMENT_FAT':
      return { ...state, fat: state.fat - 5 };

    default:
      return state;
  }
};

const Incrementor = props => {
  const handleChange = event => {
    props.dispatch({
      type: `SET_${props.label.toUpperCase()}`,
      payload: event.target.value,
    });
  };

  const handleIncrement = event => {
    props.dispatch({
      type: `INCREMENT_${props.label.toUpperCase()}`,
    });
  };

  const handleDecrement = event => {
    props.dispatch({
      type: `DECREMENT_${props.label.toUpperCase()}`,
    });
  };

  return (
    <Stack direction="row">
      <Box>
        <IconButton size="small" onClick={handleDecrement}>
          <Remove />
        </IconButton>
      </Box>
      <Box>
        <TextField
          type="number"
          inputProps={{
            style: { textAlign: 'center' },
            min: 0,
            max: 100,
            step: 1,
          }}
          InputProps={{ startAdornment: <Percent /> }}
          id={props.label}
          label={props.label}
          variant="outlined"
          size="small"
          value={props.value}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <IconButton size="small" onClick={handleIncrement}>
          <Add />
        </IconButton>
      </Box>
    </Stack>
  );
};

const MacroPercentages = () => {
  const [macroState, macroDispatch] = useReducer(macroReducer, {
    protein: 0,
    carb: 0,
    fat: 0,
  });

  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Grid container spacing={1} justifyContent="space-evenly">
        <Grid item xs={12}>
          <Typography variant="h6" component="h4">
            Macro Percentages
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Incrementor
            label="Protein"
            value={macroState.protein}
            dispatch={macroDispatch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Incrementor
            label="Carb"
            value={macroState.carb}
            dispatch={macroDispatch}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Incrementor
            label="Fat"
            value={macroState.fat}
            dispatch={macroDispatch}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MacroPercentages;
