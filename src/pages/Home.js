import React from 'react';
import { Counter } from '../components/Counter';

export const Home = () => (
  <div className="page-container">
    <h1>Welcome to AuthApp</h1>
    <p>A multi-page application featuring authentication, dynamic routing, and testing.</p>
    <div className="card">
      <h3>Interactive Counter Demo</h3>
      <Counter min={0} max={10} />
    </div>
  </div>
);