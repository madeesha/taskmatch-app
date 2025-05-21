import React, { useState } from 'react';
import { Box, Container, Grid, Typography, useTheme, Link } from '@mui/material';
import TextField from '../common/TextField';
import Button from '../common/Button';
import SectionHeading from '../common/SectionHeading';

const LoginPage = () => {
  const theme = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle sign in or sign up
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          p: 4,
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
        }}
      >
        <SectionHeading 
          title={isSignUp ? 'Create an account' : 'Welcome back'}
          variant="h4"
          sx={{ mb: 4, textAlign: 'center' }}
        />

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {isSignUp && (
              <Grid item xs={12}>
                <TextField
                  name="fullName"
                  label="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <TextField
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="password"
                label="Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
              />
            </Grid>

            {isSignUp && (
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="primary"
                fullWidth
                size="large"
              >
                {isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
            </Grid>

            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography variant="body2">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setIsSignUp(!isSignUp)}
                  sx={{ fontWeight: 500 }}
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;
