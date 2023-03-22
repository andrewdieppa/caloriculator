import { useState } from 'react';
import MuiLightDarkSwitch from '../MuiLightDarkSwitch/MuiLightDarkSwitch';
import MenuIcon from '@mui/icons-material/Menu';
import { Logout, AccountCircle, MenuBook } from '@mui/icons-material';
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
import { Link } from 'react-router-dom';
import { auth } from '../../firebase-config';

const NavAppBar = () => {
  const theme = useTheme();
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

  const profileIcon = user ? <Avatar /> : null;

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
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <AccountCircle fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <MenuBook fontSize="small" />
              </ListItemIcon>
              Meal Plans
            </MenuItem>
            <MenuItem onClick={handleCloseMenu}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
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
