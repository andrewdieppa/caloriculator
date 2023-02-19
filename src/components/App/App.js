import NavAppBar from '../NavAppBar/NavAppBar';
import MacroPercentages from '../MacroPercentages/MacroPercentages';
import MacroGrams from '../MacroGrams/MacroGrams';
import TotalCalories from '../TotalCalories/TotalCalories';
import { Container, Stack } from '@mui/material';

function App() {
  return (
    <>
      <NavAppBar />
      <Container>
        <Stack spacing={1}>
          <TotalCalories />
          <MacroPercentages />
          <MacroGrams />
        </Stack>
      </Container>
    </>
  );
}

export default App;
