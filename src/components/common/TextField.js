import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Reusable TextField component with consistent styling
 * 
 * @param {Object} props - Component props
 * @param {string} [props.label] - Input label
 * @param {string} [props.variant='outlined'] - TextField variant
 * @param {('small'|'medium')} [props.size='medium'] - TextField size
 * @param {string} [props.placeholder] - Placeholder text
 * @param {string} [props.defaultValue] - Default input value
 * @param {string} [props.value] - Controlled input value
 * @param {boolean} [props.fullWidth=false] - Whether the input takes full width
 * @param {boolean} [props.required=false] - Whether the field is required
 * @param {string} [props.error] - Error message
 * @param {string} [props.helperText] - Helper text
 * @param {Function} [props.onChange] - Change handler function
 * @param {Object} [props.InputProps] - Props for the Input component
 * @param {Object} [props.sx] - Additional MUI styles
 */
const TextField = ({
  label,
  variant = 'outlined',
  size = 'medium',
  placeholder,
  defaultValue,
  value,
  fullWidth = false,
  required = false,
  error,
  helperText,
  onChange,
  InputProps,
  sx,
  ...rest
}) => {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      size={size}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      fullWidth={fullWidth}
      required={required}
      error={!!error}
      helperText={error || helperText}
      onChange={onChange}
      InputProps={InputProps}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: 'primary.main',
        },
        ...sx,
      }}
      {...rest}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  size: PropTypes.oneOf(['small', 'medium']),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  InputProps: PropTypes.object,
  sx: PropTypes.object,
};

export default TextField;