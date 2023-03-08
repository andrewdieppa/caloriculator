import { Button, Paper, Stack } from '@mui/material';
import {
  toggleProteinModal,
  toggleCarbModal,
  toggleFatModal,
  toggleArrangeModal,
} from '../../store/uiSlice';
import { useDispatch } from 'react-redux';

const EditButtonBar = () => {
  const dispatch = useDispatch();

  return (
    <Paper>
      <Stack
        direction="row"
        sx={{ mb: 2, p: 1, justifyContent: 'space-between' }}
      >
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(toggleProteinModal())}
        >
          Protein
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(toggleCarbModal())}
        >
          Carbs
        </Button>
        <Button
          variant="contained"
          size="small"
          onClick={() => dispatch(toggleFatModal())}
        >
          Fat
        </Button>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => dispatch(toggleArrangeModal())}
        >
          Arrange
        </Button>
      </Stack>
    </Paper>
  );
};

export default EditButtonBar;
