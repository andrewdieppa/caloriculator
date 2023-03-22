import MacroPercentages from '../components/MacroPercentages/MacroPercentages';
import MacroGrams from '../components/MacroGrams/MacroGrams';
import TotalCalories from '../components/TotalCalories/TotalCalories';
import Meals from '../components/Meals/Meals';
import ProteinModal from '../components/Modals/ProteinModal';
import CarbModal from '../components/Modals/CarbModal';
import FatModal from '../components/Modals/FatModal';
import ArrangeModal from '../components/Modals/ArrangeModal';
import AddMealModal from '../components/Modals/AddMealModal';
import SnackBarWarning from '../components/SnackBar/SnackBarWarning';
import { Container, Box } from '@mui/material';

const AppPage = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column', mb: 8 }}>
          <Box sx={{ mb: 2 }}>
            <TotalCalories />
          </Box>
          <Box sx={{ mb: 2 }}>
            <MacroPercentages />
          </Box>
          <Box sx={{ mb: 2 }}>
            <MacroGrams />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Meals />
          </Box>
        </Box>
      </Container>
      {/* Modals and Snackbar alerts */}
      <ProteinModal />
      <CarbModal />
      <FatModal />
      <ArrangeModal />
      <AddMealModal />
      <SnackBarWarning />
    </>
  );
};

export default AppPage;
