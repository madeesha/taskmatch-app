import React from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Reusable section heading component with optional action button
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {React.ReactNode} [props.action] - Optional action component (usually a button)
 * @param {('h1'|'h2'|'h3'|'h4'|'h5'|'h6')} [props.variant='h3'] - Typography variant
 * @param {Object} [props.sx] - Additional MUI styles
 */
const SectionHeading = ({ title, action, variant = 'h3', sx = {} }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        ...sx,
      }}
    >
      <Typography
        variant={variant}
        sx={{
          color: 'secondary.main',
          fontWeight: 600,
        }}
      >
        {title}
      </Typography>
      {action}
    </Box>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.node,
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  sx: PropTypes.object,
};

export default SectionHeading;