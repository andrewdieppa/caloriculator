import { Button, Paper, Stack } from '@mui/material';

const EditButtonBar = () => {
  return (
    <Paper>
      <Stack
        direction="row"
        sx={{ mb: 2, p: 1, justifyContent: 'space-between' }}
      >
        <Button variant="contained" size="small">
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
