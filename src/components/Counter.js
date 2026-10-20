import React, { useState } from 'react';

export const Counter = ({ min = 0, max = 10 }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => Math.min(prev + 1, max));
  const decrement = () => setCount((prev) => Math.max(prev - 1, min));

  return (
    <div className="counter-component">
      <span data-testid="counter-value" className="counter-value">{count}</span>
      <div className="counter-actions">
        <button className="btn-decrement" onClick={decrement} disabled={count <= min}>Decrement</button>
        <button className="btn-increment" onClick={increment} disabled={count >= max}>Increment</button>
      </div>
    </div>
  );
};