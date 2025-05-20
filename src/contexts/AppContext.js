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
  // Sample tasks data
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Paint Living Room Walls',
      description: 'Need help painting my living room walls. The room is approximately 15x20 feet with 9-foot ceilings. Paint and supplies will be provided.',
      price: '$180',
      location: 'Brooklyn, NY',
      category: 'paint',
    },
    {
      id: 2,
      title: 'Help Moving Furniture',
      description: 'Need assistance moving furniture from a 1-bedroom apartment to a new location about 5 miles away. Have a few heavy items including a couch and bed frame.',
      price: '$120',
      location: 'Queens, NY',
      category: 'move',
    },
    {
      id: 3,
      title: 'Dog Walking Service',
      description: 'Looking for someone to walk my dog twice daily while I\'m away for a business trip next week. Medium-sized friendly golden retriever.',
      price: '$25/day',
      location: 'Manhattan, NY',
      category: 'pets',
    },
    {
      id: 4,
      title: 'Lawn Mowing and Garden Cleanup',
      description: 'Need someone to mow the lawn and clean up garden debris. The yard is approximately 1/4 acre with some flower beds that need weeding.',
      price: '$85',
      location: 'Staten Island, NY',
      category: 'garden',
    },
    {
      id: 5,
      title: 'Office Organization Help',
      description: 'Looking for help organizing my home office. Need assistance with filing papers, organizing office supplies, and setting up an efficient workspace.',
      price: '$60',
      location: 'Brooklyn, NY',
      category: 'organize',
    },
    {
      id: 6,
      title: 'Website Development',
      description: 'Need a simple portfolio website built using React. Looking for someone with frontend development experience who can complete the project within 2 weeks.',
      price: '$450',
      location: 'Remote',
      category: 'tech',
    },
  ]);

  // User authentication state (simplified)
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  // Mock function to add a new task
  const addTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: Date.now(), // Simple way to generate unique IDs
    };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
    return taskWithId;
  };

  // Context value
  const contextValue = {
    tasks,
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