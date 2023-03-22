import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseLine from '@mui/material/CssBaseline';
import AppPage from '../../pages/AppPage';
import SignUpPage from '../../pages/SignUpPage';
import LoginPage from '../../pages/LoginPage';
import Layout from '../../pages/Layout';
import { useSelector, useDispatch } from 'react-redux';
import themes from '../../themes';
import { auth } from '../../firebase-config';
import { setUser } from '../../store/authSlice';

// Routing
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

const App = () => {
  const { mode } = useSelector(state => state.ui);
  const dispatch = useDispatch();

  // Set Theme
  const theme = mode === 'light' ? themes.lightTheme : themes.darkTheme;

  // Add auth state change listener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(setUser({ uid: user?.uid }));
      } else {
        dispatch(setUser(null));
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
