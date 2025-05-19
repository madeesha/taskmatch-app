import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import theme from './styles/theme';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Router>
          <Layout>
            <HomePage />
          </Layout>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;