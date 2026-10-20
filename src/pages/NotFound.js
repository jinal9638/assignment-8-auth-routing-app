// src/pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="page-container text-center">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <Link to="/" className="btn">Return Home</Link>
  </div>
);