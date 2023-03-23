import { useState } from 'react';
import MuiLightDarkSwitch from '../MuiLightDarkSwitch/MuiLightDarkSwitch';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout, Login, AccountCircle, MenuBook } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../store/uiSlice';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase-config';

const NavAppBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);

  // menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleModeToggle = () => {
    dispatch(toggleMode());
  };

  const logoutHandler = () => {
    auth.signOut();
  };

  // Menu click handling
  const profileClickHandler = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
    handleCloseMenu();
  };

  const mealPlansClickHandler = () => {
    if (user) {
      navigate('/mealplans');
    } else {
      navigate('/login');
    }
    handleCloseMenu();
  };

  const loginClickHandler = () => {
    navigate('/login');
    handleCloseMenu();
  };

  const loginLogoutButton = user ? null : (
    <Link
      to="/signup"
      style={{
        textDecoration: 'none',
        color: theme.palette.primary.contrastText,
      }}
    >
      <Button sx={{ color: 'inherit' }}>Sign Up</Button>
    </Link>
  );

  const profileIcon = user ? (
    <Avatar
      onClick={profileClickHandler}
      sx={{ ':hover': { cursor: 'pointer' } }}
    />
  ) : null;

  const menuProfileItem = user ? (
    <MenuItem onClick={profileClickHandler}>
      <ListItemIcon>
        <AccountCircle fontSize="small" />
      </ListItemIcon>
      Profile
    </MenuItem>
  ) : null;

  const menuMealPlansItem = user ? (
    <MenuItem onClick={mealPlansClickHandler}>
      <ListItemIcon>
        <MenuBook fontSize="small" />
      </ListItemIcon>
      Meal Plans
    </MenuItem>
  ) : null;

  const menuLoginLogoutItem = user ? (
    <MenuItem onClick={logoutHandler}>
      <ListItemIcon>
        <Logout fontSize="small" />
      </ListItemIcon>
      Logout
    </MenuItem>
  ) : (
    <MenuItem onClick={loginClickHandler}>
      <ListItemIcon>
        <Login fontSize="small" />
      </ListItemIcon>
      Login
    </MenuItem>
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
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
            {menuProfileItem}
            {menuMealPlansItem}
            {menuLoginLogoutItem}
          </Menu>
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
          {profileIcon}
          {loginLogoutButton}
          <MuiLightDarkSwitch onChange={handleModeToggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavAppBar;
