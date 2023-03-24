import { useState, useRef, useEffect } from 'react';
import {
  Paper,
  Box,
  Stack,
  Divider,
  Typography,
  Button,
  TextField,
  Alert,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateProfile,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
  deleteUser,
  EmailAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';
import { setUser, clearUser } from '../store/authSlice';

const ProfilePage = () => {
  const containerStyles = {
    my: 8,
    mx: 'auto',
    p: 2,
    maxWidth: { xs: '90%', sm: '500px' },
  };

  const nameEditFieldRef = useRef(null);
  const confirmPassRef = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  // Alert state
  const [successMsg, setSuccessMsg] = useState(null);

  // Name and delete account Edit State
  const [nameEditMode, setNameEditMode] = useState(false);
  const [deleteAccountMode, setDeleteAccountMode] = useState(false);

  // Name Edit Logic
  const handleNameEdit = () => {
    setNameEditMode(true);
  };

  const handleNameConfirmClick = async e => {
    e.preventDefault();
    const newName = nameEditFieldRef.current.value;
    if (newName.trim() === '') {
      return;
    }

    try {
      await updateProfile(auth.currentUser, { displayName: newName });
    } catch (error) {
      console.log(error);
      return;
    }
    dispatch(setUser({ ...user, displayName: newName }));

    setNameEditMode(false);
  };

  const handleNameCancelClick = () => {
    setNameEditMode(false);
  };

  useEffect(() => {
    if (nameEditMode) {
      nameEditFieldRef.current.focus();
    }
  }, [nameEditMode]);

  const handleChangePassword = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      setSuccessMsg('Password reset email sent. Check your inbox.');
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAccount = () => {
    setDeleteAccountMode(true);
  };

  const handleDeleteCancel = () => {
    setDeleteAccountMode(false);
  };

  const handleConfirmDelete = async e => {
    e.preventDefault();

    const pass = confirmPassRef.current.value;

    if (pass.trim() === '') {
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, pass);

    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await deleteUser(auth.currentUser);
      dispatch(clearUser());
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccountForm = deleteAccountMode ? (
    <form onSubmit={handleConfirmDelete}>
      <Stack spacing={2}>
        <Typography variant="h6">
          Are you sure you want to delete your account?
        </Typography>
        <Typography variant="body2">This action cannot be undone.</Typography>
        <Typography variant="body2">
          Please enter your password to confirm.
        </Typography>
        <TextField
          inputRef={confirmPassRef}
          size="small"
          id="password"
          label="Password"
          type="password"
        />
        <Button variant="outlined" size="small" onClick={handleDeleteCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="outlined" color="error" size="small">
          Confirm
        </Button>
      </Stack>
    </form>
  ) : (
    <Button
      variant="outlined"
      color="error"
      size="small"
      onClick={handleDeleteAccount}
    >
      Delete Account
    </Button>
  );

  const nameContent = nameEditMode ? (
    <form onSubmit={handleNameConfirmClick}>
      <Stack>
        <TextField
          inputRef={nameEditFieldRef}
          size="small"
          id="name"
          label="New Name"
        />
        <Box sx={{ display: 'flex' }}>
          <Button size="small" onClick={handleNameCancelClick}>
            Cancel
          </Button>
          <Button type="submit" size="small">
            Confirm
          </Button>
        </Box>
      </Stack>
    </form>
  ) : (
    <Stack direction="row" spacing={2} alignItems="center">
      <Typography variant="h6">Name: {user && user.displayName}</Typography>
    </Stack>
  );

  return (
    <Paper sx={containerStyles}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Profile</Typography>
      </Box>
      <Divider />
      {successMsg && (
        <Alert
          onClose={() => setSuccessMsg(null)}
          severity="success"
          sx={{ mt: 2 }}
        >
          {successMsg}
        </Alert>
      )}
      <Stack spacing={2} sx={{ p: 2 }}>
        {nameContent}
        <Typography variant="h6">Email: {user && user.email}</Typography>
        <Button variant="outlined" size="small" onClick={handleNameEdit}>
          Change Name
        </Button>
        <Button variant="outlined" size="small" onClick={handleChangePassword}>
          Change Password
        </Button>
        <Divider />
        {deleteAccountForm}
      </Stack>
    </Paper>
  );
};

export default ProfilePage;
