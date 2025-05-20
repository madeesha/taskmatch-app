import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; // ✅ Import Outlet

/**
 * Main layout component that wraps all pages
 */
const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet /> {/* ✅ This renders the route-specific content like HomePage */}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
