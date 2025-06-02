// src/components/common/LanguageSwitcher.js
import React, { useState } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  useTheme
} from '@mui/material';
import {
  Language as LanguageIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];

/**
 * Language switcher component with dropdown menu
 */
const LanguageSwitcher = ({ color = 'inherit' }) => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          color: color,
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        }}
        aria-label="Change language"
      >
        <LanguageIcon />
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            minWidth: 150,
            mt: 1,
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography component="span" sx={{ fontSize: '1.2em' }}>
                {language.flag}
              </Typography>
              <Typography variant="body2">
                {language.name}
              </Typography>
            </Box>
            {language.code === i18n.language && (
              <CheckIcon sx={{ color: theme.palette.primary.main, ml: 1 }} />
            )}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;