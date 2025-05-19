import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
} from '@mui/material';
import {
  Add as AddIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  Help as HelpIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuIcon sx={{ color: theme.palette.primary.main, mr: 1 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: theme.palette.primary.main,
                fontSize: '1.75rem',
              }}
            >
              TaskMatch
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
            <Button
              startIcon={<AddIcon />}
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Post a Task
            </Button>
            <Button
              startIcon={<PersonIcon />}
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Register as Tasker
            </Button>
            <Button
              startIcon={<SearchIcon />}
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Browse Tasks
            </Button>
            <Button
              startIcon={<HelpIcon />}
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              How it Works
            </Button>
          </Box>

          {/* Auth Buttons */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              sx={{
                color: theme.palette.text.primary,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;