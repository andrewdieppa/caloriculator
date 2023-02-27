import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#725c00',
      light: '#ffe07d',
      dark: '#231b00',
    },
    secondary: {
      main: '#45664c',
      light: '#c7eccb',
      dark: '#01210d',
    },
    background: {
      paper: '#ffe07d',
      paperVariant: '#ebe2cf',
      default: '#fff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#eac32d',
      light: '#ffe07d',
      dark: '#3b2f00',
    },
    secondary: {
      main: '#abcfb0',
      light: '#c7eccb',
      dark: '#2e4e36',
    },
    background: {
      paper: '#3b2f00',
      paperVariant: '#4b4639',
      default: '#333',
    },
  },
});

const themes = {
  lightTheme,
  darkTheme,
};

export default themes;
