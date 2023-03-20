import { Paper, Stack, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
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
          <Typography variant="h4">Sign Up</Typography>
          <TextField label="Email" />
          <TextField type="password" label="Password" />
          <TextField type="password" label="Confirm Password" />
          <Button variant="contained" type="submit">
            Create Account
          </Button>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Typography variant="subtitle1">
              Already have an account?
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" size="small">
                Log In Here
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default SignUpPage;
