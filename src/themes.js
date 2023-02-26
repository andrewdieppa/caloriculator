import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#F1A208',
      light: '#FAC761',
      dark: '#9D6B06',
    },
    secondary: {
      main: '#00914B',
      light: '#00BA60',
      dark: '#006E39',
    },
    background: {
      default: '#eee',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FCDC9C',
      light: '#FEF1D7',
      dark: '#FAC761',
    },
    secondary: {
      main: '#00DF73',
      light: '#00FF84',
      dark: '#00BA60',
    },
    background: {
      default: '#333',
    },
  },
});

const themes = {
  lightTheme,
  darkTheme,
};

export default themes;
