import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Paper
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#001f6b' }}>
          Sign up to Airtasker
        </Typography>

        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            label="Email*"
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            label="Password*"
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

          <Paper
            elevation={1}
            sx={{
              p: 2,
              display: 'flex',
              alignItems: 'center',
              mt: 2,
              border: '1px solid #ccc'
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label="I'm not a robot"
            />
            <Box sx={{ ml: 'auto', textAlign: 'center' }}>
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
                style={{ height: 30 }}
              />
              <Typography variant="caption" color="textSecondary">
                reCAPTCHA <br /> Privacy - Terms
              </Typography>
            </Box>
          </Paper>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              borderRadius: 999,
              backgroundColor: 'green',
              '&:hover': {
                backgroundColor: 'darkgreen'
              },
              textTransform: 'none',
              fontWeight: 'bold'
            }}
          >
            Sign up
          </Button>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Typography component="span" color="primary" fontWeight="bold">
                Log in
              </Typography>
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }}>OR</Divider>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={{
              mb: 1,
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#001f6b',
              borderColor: '#ccc'
            }}
          >
            Continue with Google
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            sx={{
              mb: 1,
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#001f6b',
              borderColor: '#ccc'
            }}
          >
            Continue with Facebook
          </Button>

          <Button
            fullWidth
            variant="outlined"
            startIcon={<AppleIcon />}
            sx={{
              borderRadius: 999,
              textTransform: 'none',
              fontWeight: 'bold',
              color: '#001f6b',
              borderColor: '#ccc'
            }}
          >
            Continue with Apple
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpPage;
