import { useRef, useState, useEffect } from 'react';
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
  TextField,
} from '@mui/material';
import { toggleAddMealModal } from '../../store/uiSlice';
import { addMeal } from '../../store/mealsSlice';

const AddMealModal = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const { showAddMealModal } = useSelector(state => state.ui);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: 0.9, sm: 0.5 },
    height: 'auto',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    px: 4,
    py: 4,
    overflow: 'auto',
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!showAddMealModal || !loaded) return;
    inputRef.current.focus();
  }, [showAddMealModal, loaded]);

  const handleSubmit = e => {
    e.preventDefault();

    if (inputRef.current.value.trim().length === 0) {
      return;
    }

    setLoaded(false);
    dispatch(addMeal(inputRef.current.value));
    dispatch(toggleAddMealModal());
  };

  const handleClose = () => {
    setLoaded(false);
    dispatch(toggleAddMealModal());
  };

  return (
    <Modal open={showAddMealModal} onClose={handleClose}>
      <>
        <AppBar enableColorOnDark position="fixed" sx={{ py: 2, mb: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Add Meal
          </Typography>
        </AppBar>
        <Box sx={style}>
          <Grow in={true} timeout={300} onEntered={() => setLoaded(true)}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <TextField inputRef={inputRef} id="meal-name" label="Meal Name" />
              <Button type="submit" variant="outlined" sx={{ ml: 1 }}>
                Add
              </Button>
            </form>
          </Grow>
        </Box>
      </>
    </Modal>
  );
};

export default AddMealModal;
