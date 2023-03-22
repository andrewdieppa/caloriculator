import { useState, useEffect, useMemo } from 'react';
import { Paper, Stack, Button, Typography, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useSelector } from 'react-redux';

const SignUpPage = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();

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
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const passwordRegex = useMemo(() => /^.{6,}$/, []);

  // input validation
  useEffect(() => {
    if (!emailRegex.test(email) && emailTouched) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (!passwordRegex.test(password) && passwordTouched) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    if (
      (!passwordRegex.test(confirmPassword) && confirmPasswordTouched) ||
      (password !== confirmPassword && confirmPasswordTouched)
    ) {
      setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  }, [
    email,
    password,
    confirmPassword,
    emailTouched,
    passwordTouched,
    confirmPasswordTouched,
    emailRegex,
    passwordRegex,
  ]);

  useEffect(() => {
    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password, confirmPassword, emailRegex, passwordRegex]);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async e => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigate('/');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Error code: ${errorCode} message: ${errorMessage}`);
    }
  };

  return (
    <Paper sx={formContainerStyles}>
      <form onSubmit={handleSignUp}>
        <Stack spacing={3}>
          <Typography variant="h4">Sign Up</Typography>
          <TextField
            label="Email"
            value={email}
            error={emailError}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            error={passwordError}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
          />
          <TextField
            type="password"
            label="Confirm Password"
            value={confirmPassword}
            error={confirmPasswordError}
            onChange={handleConfirmPasswordChange}
            onBlur={() => setConfirmPasswordTouched(true)}
          />
          <Button disabled={!isFormValid} variant="contained" type="submit">
            Create Account
          </Button>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Typography variant="subtitle1">
              Already have an account?
            </Typography>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" size="small">
                Log In
              </Button>
            </Link>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
};

export default SignUpPage;
