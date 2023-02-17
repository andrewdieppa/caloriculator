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
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MacroPercentages />
          </Grid>
          <Grid item xs={12}>
            <MacroPercentages />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
