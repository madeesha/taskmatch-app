import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import PostTaskPage from './components/Pages/PostTask';
import { AppProvider } from './contexts/AppContext';

/**
 * Main App component that sets up providers and renders the main layout
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Router>
         <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-task" element={<PostTaskPage />} />
            </Route>
        </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;

