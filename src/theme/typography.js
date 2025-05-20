// Centralized typography settings for consistent text styling
export const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  h1: {
    fontSize: '3.5rem',
    fontWeight: 700,
    lineHeight: 1.2,
    '@media (max-width:600px)': {
      fontSize: '2.5rem',
    },
  },
  h2: {
    fontSize: '2.75rem',
    fontWeight: 700,
    lineHeight: 1.2,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2,
  },
  subtitle1: {
    fontSize: '1.125rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.6,
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
  },
  button: {
    fontSize: '1rem',
    fontWeight: 500,
    textTransform: 'none',
  },
};
export default typography;