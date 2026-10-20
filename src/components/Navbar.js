import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/">AuthApp</NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active-link' : '')}>About</NavLink>
        
        {user ? (
          <>
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active-link' : '')}>Dashboard</NavLink>
            <NavLink to={`/profile/${user.id}`} className={({ isActive }) => (isActive ? 'active-link' : '')}>Profile</NavLink>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>Login</NavLink>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
};