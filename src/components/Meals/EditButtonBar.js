import { Button, Paper, Stack, Badge } from '@mui/material';
import {
  toggleProteinModal,
  toggleCarbModal,
  toggleFatModal,
  toggleArrangeModal,
} from '../../store/uiSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditButtonBar = () => {
  const dispatch = useDispatch();
  const { proteinPercTotal, carbPercTotal, fatPercTotal } = useSelector(
    state => state.mealsData
  );

  return (
    <Paper>
      <Stack
        direction="row"
        sx={{ mb: 2, p: 1, justifyContent: 'space-between' }}
      >
        <Badge variant="dot" color="error" invisible={proteinPercTotal === 100}>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(toggleProteinModal())}
          >
            Protein
          </Button>
        </Badge>
        <Badge variant="dot" color="error" invisible={carbPercTotal === 100}>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(toggleCarbModal())}
          >
            Carbs
          </Button>
        </Badge>
        <Badge variant="dot" color="error" invisible={fatPercTotal === 100}>
          <Button
            variant="contained"
            size="small"
            onClick={() => dispatch(toggleFatModal())}
          >
            Fat
          </Button>
        </Badge>
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
