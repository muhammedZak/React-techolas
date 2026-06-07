import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to='profile'>Profile</Link>
        <br />
        <Link to='reports'>Reports</Link>
        <br />
        <Link to='settings'>Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;
