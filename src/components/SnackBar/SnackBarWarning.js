import { Snackbar, Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const SnackBarWarning = () => {
  const { totalMacroPerc, totalCalories } = useSelector(
    state => state.calorieData
  );
  const { proteinPercTotal, carbPercTotal, fatPercTotal } = useSelector(
    state => state.mealsData
  );

  const isCalorieWarning = totalCalories === '';
  const isCalorieError = !isCalorieWarning && totalCalories <= 0;

  const isMacroWarning =
    !isCalorieWarning && !isCalorieError && totalMacroPerc < 100;
  const isMacroError =
    !isCalorieWarning && !isCalorieError && totalMacroPerc > 100;

  const isProteinWarning =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    proteinPercTotal < 100;
  const isProteinError =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    proteinPercTotal > 100;
  const isCarbWarning =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    !isProteinWarning &&
    !isProteinError &&
    carbPercTotal < 100;
  const isCarbError =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    !isProteinWarning &&
    !isProteinError &&
    carbPercTotal > 100;
  const isFatWarning =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    !isProteinWarning &&
    !isProteinError &&
    !isCarbWarning &&
    !isCarbError &&
    fatPercTotal < 100;
  const isFatError =
    !isCalorieWarning &&
    !isCalorieError &&
    !isMacroWarning &&
    !isMacroError &&
    !isProteinWarning &&
    !isProteinError &&
    !isCarbWarning &&
    !isCarbError &&
    fatPercTotal > 100;

  return (
    <>
      <Snackbar open={isCalorieWarning}>
        <Alert severity="warning">Please enter your total caloric intake</Alert>
      </Snackbar>
      <Snackbar open={isCalorieError}>
        <Alert severity="error">
          Please enter a number greater than zero for your total caloric intake
        </Alert>
      </Snackbar>
      <Snackbar open={isMacroWarning}>
        <Alert severity="warning">
          <span style={{ fontWeight: 'bold' }}>Macro percentages</span> total is
          too low!
        </Alert>
      </Snackbar>
      <Snackbar open={isMacroError}>
        <Alert severity="error">
          <span style={{ fontWeight: 'bold' }}>Macro percentages</span> total is
          too high!
        </Alert>
      </Snackbar>
      <Snackbar open={isProteinWarning}>
        <Alert severity="warning">
          Meal <span style={{ fontWeight: 'bold' }}>protein</span> percent total
          is too low!
        </Alert>
      </Snackbar>
      <Snackbar open={isProteinError}>
        <Alert severity="error">
          <span style={{ fontWeight: 'bold' }}>Meal protein</span> percentages
          are too high!
        </Alert>
      </Snackbar>
      <Snackbar open={isCarbWarning}>
        <Alert severity="warning">
          <span style={{ fontWeight: 'bold' }}>Meal carb</span> percentages are
          too low!
        </Alert>
      </Snackbar>
      <Snackbar open={isCarbError}>
        <Alert severity="error">
          <span style={{ fontWeight: 'bold' }}>Meal carb</span> percentages are
          too high!
        </Alert>
      </Snackbar>
      <Snackbar open={isFatWarning}>
        <Alert severity="warning">
          <span style={{ fontWeight: 'bold' }}>Meal fat</span> percentages are
          too low!
        </Alert>
      </Snackbar>
      <Snackbar open={isFatError}>
        <Alert severity="error">
          <span style={{ fontWeight: 'bold' }}>Meal fat</span> percentages are
          too high!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarWarning;
