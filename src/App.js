import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import theme from './styles/theme';
import Layout from './components/Layout/Layout';
import HomePage from './components/Pages/HomePage';
import PostTask from './components/Pages/task';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Router>
         <Routes>
            <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/post-task" element={<PostTask />} />
            </Route>
        </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}
export default App;

