import { Stack, Paper, Box, Typography } from '@mui/material';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';

const Meals = () => {
  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, py: 1 }}>
      <Stack spacing={2}>
        <SectionTitle variant="h5" component="h4" sx={{ mb: 1 }}>
          Meals
        </SectionTitle>
        <Paper></Paper>
      </Stack>
    </Paper>
  );
};

export default Meals;
