import { useState, useRef, useEffect } from 'react';
import MealMacPercSlider from './MealMacPercSlider';
import MacroChip from './MacroChip';
import {
  Typography,
  Paper,
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  Button,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSelector, useDispatch } from 'react-redux';
import {
  setName,
  setProteinPerc,
  setProteinPercTotal,
  setCarbPerc,
  setCarbPercTotal,
  setFatPerc,
  setFatPercTotal,
  setProteinGrams,
  setCarbGrams,
  setFatGrams,
  setCalories,
  removeMeal,
} from '../../store/mealsSlice';

const Meal = ({ meal }) => {
  const dispatch = useDispatch();

  const { proteinGrams, carbGrams, fatGrams } = useSelector(
    state => state.calorieData
  );

  const { proteinPercTotal, carbPercTotal, fatPercTotal } = useSelector(
    state => state.mealsData
  );

  useEffect(() => {
    const newCalories = Number(
      meal.proteinGrams * 4 + meal.carbGrams * 4 + meal.fatGrams * 9
    );
    dispatch(setCalories({ mealId: meal.id, calories: newCalories }));
  }, [meal.proteinGrams, meal.carbGrams, meal.fatGrams, dispatch, meal.id]);

  useEffect(() => {
    const newMacroValue = Number((meal.proteinPerc / 100) * proteinGrams);
    dispatch(setProteinGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setProteinPercTotal());
  }, [meal.proteinPerc, proteinGrams, dispatch, meal.id]);

  useEffect(() => {
    const newMacroValue = Number((meal.carbPerc / 100) * carbGrams);
    dispatch(setCarbGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setCarbPercTotal());
  }, [meal.carbPerc, carbGrams, dispatch, meal.id]);

  useEffect(() => {
    const newMacroValue = Number((meal.fatPerc / 100) * fatGrams);
    dispatch(setFatGrams({ mealId: meal.id, macroGrams: newMacroValue }));
    dispatch(setFatPercTotal());
  }, [meal.fatPerc, fatGrams, dispatch, meal.id]);

  // edit/delete state and ref
  const editFieldRef = useRef(null);

  const [editMode, setEditMode] = useState(false);
  const [titleMode, setTitleMode] = useState(true);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    if (editMode) {
      editFieldRef.current.focus();
    }
  }, [editMode]);

  const handleEditClick = () => {
    setTitleMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleTitleExit = () => {
    setEditMode(true);
  };

  const handleEditExit = () => {
    setTitleMode(true);
  };

  const handleConfirmClick = e => {
    e.preventDefault();
    if (editFieldRef.current.value === '') {
      return;
    }
    dispatch(setName({ mealId: meal.id, name: editFieldRef.current.value }));
    setEditMode(false);
  };

  // delete meal
  const handleDeleteClick = () => {
    setDeleted(true);
  };

  const handleDeleteExit = () => {
    dispatch(removeMeal(meal.id));
    dispatch(setProteinPercTotal());
    dispatch(setCarbPercTotal());
    dispatch(setFatPercTotal());
  };

  // conditional title bar content for edit mode
  // based on transition behavior
  const titleBarContent = (
    <>
      {/* editing */}
      <Collapse
        in={editMode}
        timeout={200}
        onExited={handleEditExit}
        unmountOnExit
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
            mt: 1,
          }}
        >
          <form onSubmit={handleConfirmClick}>
            <Stack>
              <TextField
                inputRef={editFieldRef}
                size="small"
                id="meal-name"
                label="Meal Name"
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button size="small" onClick={handleCancelClick}>
                  Cancel
                </Button>
                <Button type="submit" size="small" onClick={handleConfirmClick}>
                  Confirm
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Collapse>
      {/* not editing */}
      <Collapse
        in={titleMode}
        timeout={200}
        onExited={handleTitleExit}
        unmountOnExit
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
            py: 1,
          }}
        >
          <Typography variant={'h6'} component="h5">
            {meal.name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Chip
              label="edit"
              size="small"
              color="primary"
              onClick={handleEditClick}
            />
            <Chip
              label="delete"
              size="small"
              color="error"
              onClick={handleDeleteClick}
            />
          </Stack>
        </Box>
      </Collapse>
    </>
  );

  return (
    <Collapse
      in={!deleted}
      timeout={200}
      onExited={handleDeleteExit}
      unmountOnExit
    >
      <Paper>
        {titleBarContent}

        <Paper
          sx={{
            bgcolor: 'background.paperVariant',
            mx: 2,
            mb: 1,
            px: 4,
            py: 2,
          }}
        >
          <Stack
            direction={'row'}
            justifyContent="space-around"
            marginBottom={2}
          >
            <MacroChip avatarLetter="P" macroGrams={+meal.proteinGrams} />
            <MacroChip avatarLetter="C" macroGrams={+meal.carbGrams} />
            <MacroChip avatarLetter="F" macroGrams={+meal.fatGrams} />
          </Stack>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography fontWeight={'bold'}>
              {meal.calories.toFixed(0)} kcal
            </Typography>
          </Box>
        </Paper>
        <Accordion disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Meal Macro Percentages</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack>
              <MealMacPercSlider
                title={'Protein'}
                mealId={meal.id}
                macroPerc={meal.proteinPerc}
                macroPercTotal={proteinPercTotal}
                setterAction={setProteinPerc}
                color="primary"
              />
              <MealMacPercSlider
                title={'Carb'}
                mealId={meal.id}
                macroPerc={meal.carbPerc}
                macroPercTotal={carbPercTotal}
                setterAction={setCarbPerc}
                color="primary"
              />
              <MealMacPercSlider
                title={'Fat'}
                mealId={meal.id}
                macroPerc={meal.fatPerc}
                macroPercTotal={fatPercTotal}
                setterAction={setFatPerc}
                color="primary"
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Collapse>
  );
};

export default Meal;
