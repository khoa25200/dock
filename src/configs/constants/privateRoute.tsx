import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const token = localStorage.getItem('tk');
  if (isLoggedIn === 'false' && !token) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
