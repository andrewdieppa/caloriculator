import { useState } from 'react';
import { Paper, Stack, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const LoginPage = () => {
  const formContainerStyles = {
    mt: 10,
    mx: 'auto',
    p: 2,
    maxWidth: { xs: '90%', sm: '400px' },
  };

  // input state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      console.log(
        `Signed in as user: ${userCred.user.email} password: ${password}`
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Error code: ${errorCode} message: ${errorMessage}`);
    }
  };

  return (
    <Paper sx={formContainerStyles}>
      <form onSubmit={handleLogin}>
        <Stack spacing={3}>
          <Typography variant="h4">Log In</Typography>
          <TextField label="Email" onChange={handleEmailChange} />
          <TextField
            type="password"
            label="Password"
            onChange={handlePasswordChange}
          />
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
