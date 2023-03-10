import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  AppBar,
  Stack,
  Box,
  IconButton,
  Typography,
  Divider,
  Grow,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { toggleArrangeModal } from '../../store/uiSlice';
import { moveMealUp, moveMealDown } from '../../store/mealsSlice';
import { Flipper, Flipped } from 'react-flip-toolkit';

const ArrangeModal = () => {
  const dispatch = useDispatch();
  const { meals, numMeals } = useSelector(state => state.mealsData);
  const { showArrangeModal } = useSelector(state => state.ui);

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
    px: { xs: 4, sm: 8 },
    pb: 6,
    overflow: 'auto',
  };

  return (
    <Modal
      open={showArrangeModal}
      onClose={() => dispatch(toggleArrangeModal())}
    >
      <>
        <AppBar enableColorOnDark position="fixed" sx={{ py: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Meal Order
          </Typography>
        </AppBar>
        <Box sx={style}>
          <Box sx={{ mt: 5 }}>
            <Flipper flipKey={meals.map(meal => meal.id).join('')}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {meals.map(meal => {
                  return (
                    <Flipped flipId={meal.id} key={meal.id}>
                      <li>
                        <Grow in={true} timeout={300}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Typography variant="h6">{meal.name}</Typography>
                            <Stack sx={{ justifySelf: 'center' }}>
                              <IconButton
                                onClick={() => dispatch(moveMealUp(meal.id))}
                              >
                                <KeyboardArrowUp fontSize="small" />
                              </IconButton>
                              <IconButton
                                onClick={() => dispatch(moveMealDown(meal.id))}
                              >
                                <KeyboardArrowDown fontSize="small" />
                              </IconButton>
                            </Stack>
                          </Box>
                        </Grow>
                        <Divider />
                      </li>
                    </Flipped>
                  );
                })}
              </ul>
            </Flipper>
          </Box>
        </Box>
      </>
    </Modal>
  );
};

export default ArrangeModal;
