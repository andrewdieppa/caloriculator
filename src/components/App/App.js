import MacroPercentages from '../MacroPercentages/MacroPercentages';
import MacroGrams from '../MacroGrams/MacroGrams';
import TotalCalories from '../TotalCalories/TotalCalories';
import { Container, createTheme, Stack, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Stack spacing={1}>
          <TotalCalories />
          <MacroPercentages />
          <MacroGrams />
        </Stack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
