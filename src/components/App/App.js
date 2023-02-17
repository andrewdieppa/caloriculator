import MacroPercentages from '../MacroPercentages/MacroPercentages';
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
        <MacroPercentages />
      </Container>
    </ThemeProvider>
  );
}

export default App;
