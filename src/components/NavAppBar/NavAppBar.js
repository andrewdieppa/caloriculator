import MuiLightDarkSwitch from '../MuiLightDarkSwitch/MuiLightDarkSwitch';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../store/uiSlice';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';

const NavAppBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  const handleModeToggle = () => {
    dispatch(toggleMode());
  };

  const logoutHandler = () => {
    auth.signOut();
  };

  const loginLogoutButton = user ? (
    <Button onClick={logoutHandler} sx={{ color: 'inherit' }}>
      Logout
    </Button>
  ) : (
    <Link
      to="/login"
      style={{
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
      }}
    >
      <Button sx={{ color: 'inherit' }}>Login</Button>
    </Link>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar sx={{ p: { xs: 1, sm: 0 } }} position="static" enableColorOnDark>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: theme.palette.primary.contrastText,
              }}
            >
              Caloriculator
            </Link>
          </Typography>
          {loginLogoutButton}
          <MuiLightDarkSwitch onChange={handleModeToggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavAppBar;
