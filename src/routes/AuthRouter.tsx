import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRouter: React.FC = (props) => {
  const userName = useSelector((state: any) => state.user.userName);

  if (userName) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default AuthRouter;
