import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  FormControlLabel,
  Checkbox,
  Divider,
  InputAdornment,
  IconButton
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  AccountCircle as UserIcon
} from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import Button from '../common/Button';
import TextField from '../common/TextField';
import SectionHeading from '../common/SectionHeading';
import IconBox from '../common/IconBox';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 3,
              p: 4,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <SectionHeading 
                title="Sign up to TaskMatch" 
                variant="h4"
            />
            </Box>

            
            <Box component="form" onSubmit={handleSubmit}>
              <Box sx={{ mb: 4 }}>
                <TextField
                  label="Email"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Password"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleClickShowPassword} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>

              <Button
                type="submit"
                variant="primary"
                size="large"
                fullWidth
                sx={{ mb: 2 }}
              >
                Sign up
              </Button>

              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Typography 
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  Already have an account?{' '}
                  <Typography 
                    component="span" 
                    sx={{ 
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                    onClick={() => navigate('/login')}
                  >
                    Log in
                  </Typography>
                </Typography>
              </Box>

              <Divider>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    px: 2,
                    color: theme.palette.text.secondary,
                    fontWeight: 500
                  }}
                >
                  OR
                </Typography>
              </Divider>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 3 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 50,
                    py: 1.5,
                    px: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: theme.palette.background.default
                    }
                  }}
                >
                  <GoogleIcon sx={{ mr: 2, color: '#4285F4' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary
                    }}
                  >
                    Continue with Google
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 50,
                    py: 1.5,
                    px: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: theme.palette.background.default
                    }
                  }}
                >
                  <FacebookIcon sx={{ mr: 2, color: '#1877F2' }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary
                    }}
                  >
                    Continue with Facebook
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 50,
                    py: 1.5,
                    px: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: theme.palette.background.default
                    }
                  }}
                >
                  <AppleIcon sx={{ mr: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary
                    }}
                  >
                    Continue with Apple
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;