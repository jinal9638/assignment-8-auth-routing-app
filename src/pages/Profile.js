// src/pages/Profile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Profile = () => {
  const { userId } = useParams();
  const { user } = useAuth();

  return (
    <div className="page-container">
      <h1>User Profile</h1>
      <div className="card">
        <p><strong>URL Parameter (userId):</strong> {userId}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Account ID:</strong> {user?.id}</p>
      </div>
    </div>
  );
};


