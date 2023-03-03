import { Button, Paper, Stack } from '@mui/material';
import { toggleProteinModal } from '../../store/uiSlice';
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
        <Button variant="contained" size="small">
          Carbs
        </Button>
        <Button variant="contained" size="small">
          Fat
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Arrange
        </Button>
      </Stack>
    </Paper>
  );
};

export default EditButtonBar;
