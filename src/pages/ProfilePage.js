import { Paper, Box, Stack, Divider, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const containerStyles = {
    mt: 10,
    mx: 'auto',
    p: 2,
    maxWidth: { xs: '90%', sm: '500px' },
  };

  const { user } = useSelector(state => state.auth);

  return (
    <Paper sx={containerStyles}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Profile</Typography>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ p: 2 }}>
        <Typography variant="h6">Email: {user && user.email}</Typography>
        <Button variant="outlined" size="small">
          Change Email
        </Button>
        <Button variant="outlined" size="small">
          Change Password
        </Button>
        <Divider />
        <Button variant="outlined" color="error" size="small">
          Delete Account
        </Button>
      </Stack>
    </Paper>
  );
};

export default ProfilePage;
