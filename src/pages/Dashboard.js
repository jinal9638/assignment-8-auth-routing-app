import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>Dashboard</h1>
      <p>Welcome back, <strong>{user?.name || user?.email}</strong>!</p>

      <div className="dashboard-content">
        <h3>Recent Orders</h3>
        <ul className="order-list">
          <li><Link to="/order/ORD-1001">Order #ORD-1001</Link></li>
          <li><Link to="/order/ORD-1002">Order #ORD-1002</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};