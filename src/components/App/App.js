import NavAppBar from '../NavAppBar/NavAppBar';
import MacroPercentages from '../MacroPercentages/MacroPercentages';
import MacroGrams from '../MacroGrams/MacroGrams';
import TotalCalories from '../TotalCalories/TotalCalories';
import Meals from '../Meals/Meals';
import { Container, Grid, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import themes from '../../themes';

function App() {
  const { mode } = useSelector(state => state.ui);

  const theme = mode === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <NavAppBar />
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
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
    </ThemeProvider>
  );
}

export default App;
