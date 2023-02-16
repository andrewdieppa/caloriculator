import { Paper, Grid, Typography, TextField } from '@mui/material';
import { Percent } from '@mui/icons-material';

// go to https://mui.com/material-ui/react-text-field/#components
// to further investigate TextField customization

const MacroTextField = props => {
  return (
    <TextField
      type="number"
      defaultValue={0}
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
    />
  );
};

const MacroPercentages = () => {
  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" component="h4">
            Macro Percentages
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <MacroTextField label="Protein" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MacroTextField label="Carb" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <MacroTextField label="Fat" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MacroPercentages;
