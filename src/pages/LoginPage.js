import { useState, useEffect } from 'react';
import {
  Paper,
  Stack,
  Button,
  Typography,
  TextField,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

  // Alert state
  const [alertMsg, setAlertMsg] = useState(null);

  useEffect(() => {
    // if user is logged in, redirect to home page
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

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
    setAlertMsg(null);

    try {
      if (email === '' || password === '') {
        setAlertMsg('Please enter your email and password.');
        return;
      }
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      if (
        errorCode === 'auth/invalid-email' ||
        errorCode === 'auth/wrong-password'
      ) {
        setAlertMsg('Invalid email or password.');
      } else {
        setAlertMsg('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Paper sx={formContainerStyles}>
      <form onSubmit={handleLogin}>
        <Stack spacing={3}>
          <Typography variant="h4">Log In</Typography>
          {alertMsg && <Alert severity="error">{alertMsg}</Alert>}
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
