import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 6;
  const isMatch = password === confirmPassword;
  const isValid = isEmailValid && isPasswordValid && isMatch;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;
    setError('');
    setIsSubmitting(true);
    try {
      await signup(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Create Account</h2>
      {error && <div className="error-message" role="alert">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="signup-email">Email</label>
          <input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="user@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 6 characters"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Repeat password"
          />
          {!isMatch && confirmPassword && <span className="field-error">Passwords do not match</span>}
        </div>
        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? 'Creating...' : 'Signup'}
        </button>
      </form>
      <p>Already registered? <Link to="/login">Login here</Link></p>
    </div>
  );
};