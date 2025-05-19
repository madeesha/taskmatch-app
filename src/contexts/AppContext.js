import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  tasks: [
    {
      id: 1,
      title: 'Paint a Bedroom',
      description: 'Need help painting a 10×12ft bedroom. All materials provided. Flexible timing.',
      price: '$80',
      location: 'Brooklyn, NY',
      category: 'paint',
      icon: '🎨',
    },
    {
      id: 2,
      title: 'Move Furniture',
      description: 'Help needed moving a sofa and boxes from storage to apartment. Elevator access.',
      price: '$60',
      location: 'Queens, NY',
      category: 'move',
      icon: '🚚',
    },
    {
      id: 3,
      title: 'Dog Walking',
      description: 'Looking for a dog walker for 2 golden retrievers, weekdays at noon, ongoing job.',
      price: '$25/hr',
      location: 'Manhattan, NY',
      category: 'pets',
      icon: '⭐',
    },
  ],
  loading: false,
  error: null,
};

// Action types
const ActionTypes = {
  SET_USER: 'SET_USER',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  ADD_TASK: 'ADD_TASK',
  UPDATE_TASK: 'UPDATE_TASK',
  DELETE_TASK: 'DELETE_TASK',
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
      };
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ActionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ActionTypes.UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case ActionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };
    default:
      return state;
  }
};

// Context
const AppContext = createContext();

// Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Actions
  const setUser = (user) => {
    dispatch({ type: ActionTypes.SET_USER, payload: user });
  };

  const setLoading = (loading) => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: ActionTypes.SET_ERROR, payload: error });
  };

  const addTask = (task) => {
    dispatch({ type: ActionTypes.ADD_TASK, payload: task });
  };

  const updateTask = (task) => {
    dispatch({ type: ActionTypes.UPDATE_TASK, payload: task });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: ActionTypes.DELETE_TASK, payload: taskId });
  };

  const value = {
    ...state,
    setUser,
    setLoading,
    setError,
    addTask,
    updateTask,
    deleteTask,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Custom hook
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;