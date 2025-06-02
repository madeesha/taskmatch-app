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
import LanguageSwitcher from '../common/LanguageSwitcher';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

/**
 * Header component with navigation and authentication buttons
 */
const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Navigation links configuration
  const navLinks = [
    { icon: <AddIcon />, label: t('header.navigation.postTask'), path: '/post-task'},
    { icon: <PersonIcon />, label: t('header.navigation.registerTasker'), path: '/' },
    { icon: <SearchIcon />, label: t('header.navigation.browseTasks'), path: '/' },
    { icon: <HelpIcon />, label: t('header.navigation.howItWorks'), path: '/' },
  ];

  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box onClick={() => navigate('/')} sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <MenuIcon sx={{ color: theme.palette.title.text, mr: 1 }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                color: theme.palette.title.text,
              }}
            >
              {t('header.logo')}
            </Typography>
          </Box>
          
          {/* Render rest only on home page */}
          {isHomePage && (
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navLinks.map((link, index) => (
                <Button
                  onClick={() => navigate(link.path)}
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
          )}

          {/* Auth Buttons and Language Switcher */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LanguageSwitcher color={theme.palette.title.text} />
            {isHomePage && (
              <>
                <Button 
                  onClick={() => navigate('/login')}
                  variant="text" 
                  sx={{ color: theme.palette.title.text }}
                >
                  {t('header.auth.signUp')}
                </Button>
                <Button onClick={() => navigate('/signup')} variant="primary">
                  {t('header.auth.logIn')}
                </Button>
              </>
            )}
          </Box> 
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;