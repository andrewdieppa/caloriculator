import { useState, useEffect, useMemo } from 'react';
import {
  Paper,
  Stack,
  Button,
  Typography,
  TextField,
  Alert,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/authSlice';

const SignUpPage = () => {
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // if user is logged in, redirect to home page
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const formContainerStyles = {
    mt: 6,
    mx: 'auto',
    p: 2,
    maxWidth: { xs: '90%', sm: '400px' },
  };

  // input state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  const passwordRegex = useMemo(() => /^.{6,}$/, []);

  // Alert state
  const [alertMsg, setAlertMsg] = useState(null);

  // input validation
  useEffect(() => {
    if (name.trim() === '' && nameTouched) {
      setNameError(true);
    } else {
      setNameError(false);
    }

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
    name,
    email,
    password,
    confirmPassword,
    nameTouched,
    emailTouched,
    passwordTouched,
    confirmPasswordTouched,
    emailRegex,
    passwordRegex,
  ]);

  useEffect(() => {
    if (
      name.trim() !== '' &&
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      password === confirmPassword
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, email, password, confirmPassword, emailRegex, passwordRegex]);

  const handleNameChange = e => {
    setName(e.target.value);
  };

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
      await updateProfile(auth.currentUser, { displayName: name });
      dispatch(
        setUser({
          uid: auth.currentUser.uid,
          displayName: name,
          email: auth.currentUser.email,
        })
      );

      // clear input fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      // redirect to home page
      navigate('/');
    } catch (error) {
      setAlertMsg('Error creating account. Please try again.');
    }
  };

  return (
    <Paper sx={formContainerStyles}>
      <form onSubmit={handleSignUp}>
        <Stack spacing={3}>
          <Typography variant="h4">Sign Up</Typography>
          {alertMsg && <Alert severity="error">{alertMsg}</Alert>}
          <TextField
            label="Name"
            value={name}
            error={nameError}
            onChange={handleNameChange}
            onBlur={() => setNameTouched(true)}
          />
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
