import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Reusable icon box component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Icon to display
 * @param {string} [props.backgroundColor='#F5F5F5'] - Background color
 * @param {number} [props.size=48] - Size of the box
 * @param {number} [props.iconSize=24] - Size of the icon
 * @param {Object} [props.sx] - Additional MUI styles
 */
const IconBox = ({
  icon,
  backgroundColor = '#F5F5F5',
  size = 48,
  iconSize = 24,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        borderRadius: '12px',
        backgroundColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: iconSize,
        ...sx,
      }}
    >
      {icon}
    </Box>
  );
};

IconBox.propTypes = {
  icon: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.number,
  iconSize: PropTypes.number,
  sx: PropTypes.object,
};

export default IconBox;