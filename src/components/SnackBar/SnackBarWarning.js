import { Snackbar, Alert } from '@mui/material';
import { useSelector } from 'react-redux';

const SnackBarWarning = () => {
  const { totalMacroPerc } = useSelector(state => state.calorieData);
  const { proteinPercTotal, carbPercTotal, fatPercTotal } = useSelector(
    state => state.mealsData
  );

  return (
    <>
      <Snackbar open={totalMacroPerc < 100}>
        <Alert severity="warning">Macro percentage total is too low!</Alert>
      </Snackbar>
      <Snackbar open={totalMacroPerc > 100}>
        <Alert severity="error">Macro percentage total is too high!</Alert>
      </Snackbar>
      <Snackbar open={proteinPercTotal < 100}>
        <Alert severity="warning">
          Meals: <span style={{ fontWeight: 'bold' }}>protein</span> percent
          total is too low!
        </Alert>
      </Snackbar>
      <Snackbar open={proteinPercTotal > 100}>
        <Alert severity="error">
          Meals: <span style={{ fontWeight: 'bold' }}>protein</span> percent
          total is too high!
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBarWarning;
