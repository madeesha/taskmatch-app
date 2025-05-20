import React from 'react';
import { Button as MuiButton } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Reusable Button component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {('primary'|'secondary'|'outlined'|'text')} [props.variant='primary'] - Button variant
 * @param {('small'|'medium'|'large')} [props.size='medium'] - Button size
 * @param {React.ReactNode} [props.startIcon] - Icon to display before button text
 * @param {React.ReactNode} [props.endIcon] - Icon to display after button text
 * @param {Function} [props.onClick] - Click handler function
 * @param {React.ReactNode} props.children - Button content
 * @param {Object} [props.sx] - Additional MUI styles
 */
const Button = ({
  variant = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  onClick,
  children,
  sx,
  ...rest
}) => {
  // Map our custom variants to MUI variants
  const variantMapping = {
    primary: {
      muiVariant: 'contained',
      customSx: {
        backgroundColor: 'primary.main',
        color: 'white',
        '&:hover': {
          backgroundColor: 'primary.dark',
        },
      },
    },
    secondary: {
      muiVariant: 'contained',
      customSx: {
        backgroundColor: 'secondary.main',
        color: 'white',
        '&:hover': {
          backgroundColor: 'secondary.dark',
        },
      },
    },
    outlined: {
      muiVariant: 'outlined',
      customSx: {
        borderColor: 'primary.main',
        color: 'primary.main',
        '&:hover': {
          borderColor: 'primary.dark',
          backgroundColor: 'rgba(0, 212, 170, 0.04)',
        },
      },
    },
    text: {
      muiVariant: 'text',
      customSx: {
        color: 'primary.main',
        '&:hover': {
          backgroundColor: 'rgba(0, 212, 170, 0.04)',
        },
      },
    },
  };

  // Size mapping
  const sizeMapping = {
    small: {
      muiSize: 'small',
      paddingX: 2,
      fontSize: '0.875rem',
    },
    medium: {
      muiSize: 'medium',
      paddingX: 3,
      fontSize: '1rem',
    },
    large: {
      muiSize: 'large',
      paddingX: 4,
      fontSize: '1.1rem',
    },
  };

  const { muiVariant, customSx } = variantMapping[variant] || variantMapping.primary;
  const { muiSize, paddingX, fontSize } = sizeMapping[size] || sizeMapping.medium;

  return (
    <MuiButton
      variant={muiVariant}
      size={muiSize}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      sx={{
        fontWeight: 500,
        px: paddingX,
        fontSize,
        ...customSx,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MuiButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined', 'text']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};

export default Button;