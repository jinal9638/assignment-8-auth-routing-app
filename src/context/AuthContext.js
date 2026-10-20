import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('app_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const signup = async (email, password, name) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    const newUser = { id: 'usr_' + Date.now(), email, name: name || email.split('@')[0] };
    setUser(newUser);
    localStorage.setItem('app_user', JSON.stringify(newUser));
    return newUser;
  };

  const login = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const loggedUser = { id: 'usr_101', email, name: email.split('@')[0] };
    setUser(loggedUser);
    localStorage.setItem('app_user', JSON.stringify(loggedUser));
    return loggedUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('app_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export { AuthContext };