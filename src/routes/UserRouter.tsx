import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/Layout';

const UserRouter: React.FC = (props) => {
  const userName = useSelector((state: any) => state.user.userName);

  if (!userName || userName.length === 0) {
    return <Navigate to={'/login'} />;
  }

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};
export default UserRouter;
