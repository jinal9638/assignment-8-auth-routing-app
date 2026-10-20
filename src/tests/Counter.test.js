import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';

describe('Counter Component Tests', () => {
  it('renders initial UI with value 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('increments counter value on increment button click', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
  });

  it('decrements counter value on decrement button click', () => {
    render(<Counter />);
    const incrementBtn = screen.getByText('Increment');
    const decrementBtn = screen.getByText('Decrement');
    
    fireEvent.click(incrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  it('respects minimum limit bounds and disables decrement button', () => {
    render(<Counter min={0} />);
    const decrementBtn = screen.getByText('Decrement');
    expect(decrementBtn).toBeDisabled();
    fireEvent.click(decrementBtn);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });
});