import NavAppBar from '../NavAppBar/NavAppBar';
import MacroPercentages from '../MacroPercentages/MacroPercentages';
import MacroGrams from '../MacroGrams/MacroGrams';
import TotalCalories from '../TotalCalories/TotalCalories';
import { Container, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { mode } = useSelector(state => state.ui);

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <NavAppBar />
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
