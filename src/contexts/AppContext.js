import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Create context
const AppContext = createContext();

/**
 * AppProvider component for managing global application state
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 */
export const AppProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch tasks from backend API
  useEffect(() => {
  console.log('AppContext mounted1');

  fetch('http://localhost:8080/api/tasks')
    .then((res) => {
      console.log('API response:', res);
      return res.json();
    })
    .then((data) => {
      console.log('Fetched data:', data);
      setTasks(data);
    })
    .catch((err) => {
      console.error('Fetch error:', err);
    });
}, []);


  // Mock login function
  const login = (email, password) => {
    // In a real app, this would make an API call
    const mockUser = {
      id: 'user-123',
      name: 'John Doe',
      email: email,
    };

    setUser(mockUser);
    setIsAuthenticated(true);
    return mockUser;
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // Mock function to add a new task locally
  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(), // Replace with backend-generated ID in real app
    };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
    return taskWithId;
  };

  // Context value
  const contextValue = {
    tasks,
    setTasks,
    loading,
    user,
    isAuthenticated,
    login,
    logout,
    addTask,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Custom hook to use the App context
 * @returns {Object} The context value
 */
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
