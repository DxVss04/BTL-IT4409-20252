import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../contexts/AuthContext';

const MainLayout = () => {
  const { user } = useAuth();
  
  // Protective routing example
  // if (!user) return <Navigate to="/auth" />;

  return (
    <div className="flex w-full h-full bg-surface overflow-hidden">
      <Navigation />
      <div className="flex-1 flex w-full h-full">
         <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
