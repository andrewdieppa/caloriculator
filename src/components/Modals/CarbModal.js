import MealMacPercSlider from '../Meals/MealMacPercSlider';
import ValidIndicator from '../UI/ValidIndicator';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  AppBar,
  Stack,
  Box,
  Button,
  Typography,
  Divider,
  Grow,
} from '@mui/material';
import { Percent } from '@mui/icons-material';
import { toggleCarbModal } from '../../store/uiSlice';
import { setCarbPerc } from '../../store/mealsSlice';

const CarbModal = () => {
  const dispatch = useDispatch();
  const { meals, numMeals, carbPercTotal } = useSelector(
    state => state.mealsData
  );
  const { showCarbModal } = useSelector(state => state.ui);

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
    <Modal open={showCarbModal} onClose={() => dispatch(toggleCarbModal())}>
      <>
        <AppBar enableColorOnDark position="fixed" sx={{ py: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Carb Percentages
          </Typography>
        </AppBar>
        <Box sx={style}>
          <Grow in={true} timeout={300}>
            <Box sx={{ mt: 5 }}>
              {meals.map(meal => {
                return (
                  <MealMacPercSlider
                    modal
                    key={meal.id}
                    title={meal.name}
                    mealId={meal.id}
                    macroPerc={meal.carbPerc}
                    macroPercTotal={meal.carbPercTotal}
                    setterAction={setCarbPerc}
                    color="primary"
                  />
                );
              })}
            </Box>
          </Grow>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 1 }}>
              <ValidIndicator validityVar={carbPercTotal} />
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Typography variant="p" component="p" fontWeight="bold">
                Total: {carbPercTotal}
              </Typography>
              <Percent />
            </Box>
          </Box>
        </Box>
        {/* Done Button */}
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
            onClick={() => dispatch(toggleCarbModal())}
          >
            Done
          </Button>
        </Box>
      </>
    </Modal>
  );
};

export default CarbModal;
