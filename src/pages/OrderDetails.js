// src/pages/OrderDetails.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const OrderDetails = () => {
  const { orderId } = useParams();

  return (
    <div className="page-container">
      <h2>Order Details</h2>
      <div className="card">
        <p><strong>Order ID:</strong> {orderId}</p>
        <p><strong>Status:</strong> Processing</p>
        <Link to="/dashboard">Back to Dashboard</Link>
      </div>
    </div>
  );
};
