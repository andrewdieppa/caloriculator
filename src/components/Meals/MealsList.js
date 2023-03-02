import Meal from './Meal';
import { Stack } from '@mui/material';

const MealsList = ({ meals }) => {
  return (
    <Stack spacing={2}>
      {meals.map(meal => {
        return <Meal meal={meal} key={meal.id} />;
      })}
    </Stack>
  );
};

export default MealsList;
