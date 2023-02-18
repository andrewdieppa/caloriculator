import MacroPercentages from '../MacroPercentages/MacroPercentages';
import TotalCalories from '../TotalCalories/TotalCalories';
import { Container, createTheme, Grid, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TotalCalories />
        <MacroPercentages />
      </Container>
    </ThemeProvider>
  );
}

export default App;
