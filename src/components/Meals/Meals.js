import { Stack, Paper, Chip, Avatar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MacroChip from './MacroChip';
import SectionTitle from '../Reusable/SectionTitle/SectionTitle';
import { useSelector } from 'react-redux';

const Meals = () => {
  const theme = useTheme();

  const meals = useSelector(state => state.mealsData.meals);

  return (
    <Paper sx={{ bgcolor: 'background.paperVariant', px: 2, pt: 1, pb: 2 }}>
      <SectionTitle variant="h5" component="h4">
        Meals
      </SectionTitle>
      <Stack spacing={2}>
        {/* Future Meal component */}
        <Paper>
          <Typography textAlign={'center'} variant={'h6'} component="h5">
            {meals[0].name}
          </Typography>
          <Paper
            sx={{
              bgcolor: 'background.paperVariant',
              mx: 2,
              my: 1,
              px: 4,
              py: 2,
            }}
          >
            <Stack direction={'row'} justifyContent="space-around">
              <MacroChip avatarLetter="P" macroGrams={meals[0].proteinGrams} />
              <MacroChip avatarLetter="C" macroGrams={meals[0].carbGrams} />
              <MacroChip avatarLetter="F" macroGrams={meals[0].fatGrams} />
            </Stack>
          </Paper>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default Meals;
