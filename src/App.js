import React from 'react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material'; // ⬅️ Add GlobalStyles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import PostTaskPage from './components/Pages/PostTask';
import TaskLocationPage from './components/Pages/TaskLocationPage';
import TaskBudgetPage from './components/Pages/TaskBudgetPage';
import TaskDetails from './components/Pages/TaskDetails';
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';
import { AppProvider } from './contexts/AppContext';
import './i18n'; // Import i18n configuration

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* ✅ Set html, body, #root to full height */}
      <GlobalStyles
        styles={{
          html: { height: '100%' },
          body: { height: '100%', margin: 0 },
          '#root': { height: '100%' },
        }}
      />
      <AppProvider>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/post-task" element={<PostTaskPage />} />
              <Route path="/task-location" element={<TaskLocationPage />} />
              <Route path="/task-details" element={<TaskDetails />} />
              <Route path="/task-budget" element={<TaskBudgetPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
