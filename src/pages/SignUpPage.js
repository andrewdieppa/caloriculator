import { useState, useEffect, useMemo } from 'react';
import { Paper, Stack, Button, Typography, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const SignUpPage = () => {
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

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const passwordRegex = useMemo(() => /^.{6,}$/, []);

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
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(
        `Signed up user: ${userCred.user.email} password: ${password}`
      );
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
            error={emailError}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
          />
          <TextField
            type="password"
            label="Password"
            error={passwordError}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
          />
          <TextField
            type="password"
            label="Confirm Password"
            error={confirmPasswordError}
            onChange={handleConfirmPasswordChange}
            onBlur={() => setConfirmPasswordTouched(true)}
          />
          <Button variant="contained" type="submit">
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
