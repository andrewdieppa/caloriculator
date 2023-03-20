import { Paper, Stack, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const formContainerStyles = {
    mt: 10,
    mx: 'auto',
    p: 2,
    maxWidth: { xs: '90%', sm: '400px' },
  };

  return (
    <Paper sx={formContainerStyles}>
      <form>
        <Stack spacing={3}>
          <Typography variant="h4">Log In</Typography>
          <TextField label="Email" />
          <TextField type="password" label="Password" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Typography variant="subtitle1">Don't have an account?</Typography>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" size="small">
                Create Account
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginPage;
