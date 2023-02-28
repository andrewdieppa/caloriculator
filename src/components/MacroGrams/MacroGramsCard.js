import { Paper, Stack, Typography } from '@mui/material';

const MacroGramsCard = ({ macroLetter, macroGrams }) => {
  return (
    <Paper elevation={3}>
      <Stack
        paddingX={4}
        paddingY={2}
        direction="row"
        spacing={{ xs: 1, sm: 2 }}
        alignItems="center"
      >
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '2rem', sm: '3rem' },
            height: { xs: '2rem', sm: '3rem' },
            borderRadius: '5rem',
            backgroundColor: 'primary.main',
          }}
          elevation={2}
        >
          <Typography
            variant="h6"
            component="h5"
            color={'primary.contrastText'}
          >
            {macroLetter}
          </Typography>
        </Paper>
        <Typography variant="h6" component="h5">
          {macroGrams.toFixed(0)}g
        </Typography>
      </Stack>
    </Paper>
  );
};

export default MacroGramsCard;
