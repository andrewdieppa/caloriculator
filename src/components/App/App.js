import NavAppBar from '../NavAppBar/NavAppBar';
import MacroPercentages from '../MacroPercentages/MacroPercentages';
import MacroGrams from '../MacroGrams/MacroGrams';
import TotalCalories from '../TotalCalories/TotalCalories';
import Meals from '../Meals/Meals';
import { Container, Grid } from '@mui/material';
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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TotalCalories />
          </Grid>
          <Grid item xs={6}>
            <MacroPercentages />
          </Grid>
          <Grid item xs={6}>
            <MacroGrams />
          </Grid>
          <Grid item xs={12}>
            <Meals />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
