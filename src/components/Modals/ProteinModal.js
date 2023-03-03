import MealMacPercSlider from '../Meals/MealMacPercSlider';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  AppBar,
  Stack,
  Box,
  Button,
  Typography,
  Divider,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { toggleProteinModal } from '../../store/uiSlice';
import { setProteinPerc } from '../../store/mealsSlice';

const ProteinModal = () => {
  const dispatch = useDispatch();
  const { meals, numMeals } = useSelector(state => state.mealsData);
  const { showProteinModal } = useSelector(state => state.ui);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 0.75,
    height: numMeals >= 5 ? 0.75 : 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    px: 4,
    pb: 4,
    overflow: 'auto',
  };

  return (
    <Modal
      open={showProteinModal}
      onClose={() => dispatch(toggleProteinModal())}
    >
      <>
        <AppBar enableColorOnDark position="fixed" sx={{ py: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Protein Percentages
          </Typography>
        </AppBar>
        <Box sx={style}>
          <Box sx={{ mt: 5 }}>
            {meals.map(meal => {
              return (
                <MealMacPercSlider
                  modal
                  key={meal.id}
                  title={meal.name}
                  mealId={meal.id}
                  macroPerc={meal.proteinPerc}
                  macroPercTotal={meal.proteinPercTotal}
                  setterAction={setProteinPerc}
                  color="primary"
                />
              );
            })}
          </Box>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 5,
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Button
            sx={{
              bgcolor: 'secondary.light',
              color: 'secondary.dark',
              '&:hover': {
                bgcolor: 'secondary.dark',
                color: 'secondary.light',
              },
            }}
            variant="contained"
            size="large"
            onClick={() => dispatch(toggleProteinModal())}
          >
            Done
          </Button>
        </Box>
      </>
    </Modal>
  );
};

export default ProteinModal;
