import NavAppBar from '../components/NavAppBar/NavAppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavAppBar />
      <Outlet />
    </>
  );
};

export default Layout;
