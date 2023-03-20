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
import { useDispatch } from 'react-redux';
import { toggleMode } from '../../store/uiSlice';
import { Link } from 'react-router-dom';

const NavAppBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleModeToggle = () => {
    dispatch(toggleMode());
  };

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
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button sx={{ color: theme.palette.primary.contrastText }}>
              Login
            </Button>
          </Link>
          <MuiLightDarkSwitch onChange={handleModeToggle} />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavAppBar;
