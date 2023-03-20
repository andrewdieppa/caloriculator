import NavAppBar from '../components/NavAppBar/NavAppBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavAppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
