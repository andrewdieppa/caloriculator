import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import AppPage from '../../pages/AppPage';
import SignUpPage from '../../pages/SignUpPage';
import LoginPage from '../../pages/LoginPage';
import Layout from '../../pages/Layout';
import { useSelector } from 'react-redux';
import themes from '../../themes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <AppPage /> },
      { path: '/signup', element: <SignUpPage /> },
      { path: '/login', element: <LoginPage /> },
    ],
  },
]);

function App() {
  const { mode } = useSelector(state => state.ui);

  const theme = mode === 'light' ? themes.lightTheme : themes.darkTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
