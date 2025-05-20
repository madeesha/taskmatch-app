import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, useTheme } from '@mui/material';
import {
  Add as AddIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  Help as HelpIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import Button from '../common/Button';

/**
 * Header component with navigation and authentication buttons
 */
const Header = () => {
  const theme = useTheme();

  // Navigation links configuration
  const navLinks = [
    { icon: <AddIcon />, label: 'Post a Task' },
    { icon: <PersonIcon />, label: 'Register as Tasker' },
    { icon: <SearchIcon />, label: 'Browse Tasks' },
    { icon: <HelpIcon />, label: 'How it Works' },
  ];

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuIcon sx={{ color: theme.palette.title.text, mr: 1 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: theme.palette.title.text,
              }}
            >
              TaskMatch
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link, index) => (
              <Button
                key={index}
                variant="text"
                startIcon={React.cloneElement(link.icon, { 
                  sx: { color: theme.palette.title.text } 
                })}
                sx={{ color: theme.palette.primary.black }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="text" 
              sx={{ color: theme.palette.title.text }}
            >
              Sign Up
            </Button>
            <Button variant="primary">
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;