import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom'; // 👈 Add this

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet /> {/* 👈 This will render the matched route's element */}
      </Box>
    </Box>
  );
};

export default Layout;
