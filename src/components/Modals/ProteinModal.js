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
import { toggleProteinModal } from '../../store/uiSlice';
import { setProteinPerc } from '../../store/mealsSlice';

const ProteinModal = () => {
  const dispatch = useDispatch();
  const { meals, numMeals, proteinPercTotal } = useSelector(
    state => state.mealsData
  );
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
          <Grow in={true} timeout={300}>
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
          </Grow>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ mr: 1 }}>
              <ValidIndicator validityVar={proteinPercTotal} />
            </Box>
            <Box display={'flex'} alignItems={'center'}>
              <Typography variant="p" component="p" fontWeight="bold">
                Total: {proteinPercTotal}
              </Typography>
              <Percent />
            </Box>
          </Box>
        </Box>
      </>
    </Modal>
  );
};

export default ProteinModal;
