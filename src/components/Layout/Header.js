import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center' }}>
            <MenuIcon sx={{ color: theme.palette.title.text, mr: 1 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: theme.palette.title.text,
                fontSize: '1.75rem',
              }}
            >
              TaskMatch
            </Typography>
          </Box>

          {/* Navigation Links only on home page*/}
          {isHomePage && (
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <Button
                sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                }}
                startIcon={
                    <AddIcon sx={{ color: theme.palette.title.text }} />
                }
                >
                <span style={{ color: theme.palette.primary.black }}>Post a Task</span>
                </Button>

                <Button
                sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                }}
                startIcon={
                    <PersonIcon sx={{ color: theme.palette.title.text }} />
                }
                >
                <span style={{ color: theme.palette.primary.black }}>Register as Tasker</span>
                </Button>

                <Button
                sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                }}
                startIcon={
                    <SearchIcon sx={{ color: theme.palette.title.text }} />
                }
                >
                <span style={{ color: theme.palette.primary.black }}>Browse Tasks</span>
                </Button>

                <Button
                sx={{
                    textTransform: 'none',
                    fontWeight: 500,
                }}
                startIcon={
                    <HelpIcon sx={{ color: theme.palette.title.text }} />
                }
                >
                <span style={{ color: theme.palette.primary.black }}>How it Works</span>
                </Button>
          </Box>
          )}
          {/* Auth Buttons on HomePage*/}
          {isHomePage && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button onClick={() => navigate('/login-page')}
              sx={{
                color: theme.palette.title.text,
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Sign Up
            </Button>
            <Button onClick={() => navigate('/login')}
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
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;