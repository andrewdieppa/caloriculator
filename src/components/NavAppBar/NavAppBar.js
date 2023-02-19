import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';

const NavAppBar = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <AppBar position="static" enableColorOnDark>
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
            Caloriculator
            <Typography variant="body2" component="p">
              Worst name ever...
            </Typography>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavAppBar;
