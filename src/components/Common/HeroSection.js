import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import { Add as AddIcon, Person as PersonIcon } from '@mui/icons-material';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F7FAFC 0%, #EDF2F7 100%)',
        py: { xs: 8, md: 12 },
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                variant="h1"
                sx={{
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              >
                Find Help or Offer Skills.{' '}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  TaskMatch
                </Box>{' '}
                Gets It Done.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  fontSize: '1.25rem',
                  lineHeight: 1.6,
                  color: theme.palette.text.secondary,
                  maxWidth: 500,
                }}
              >
                Post a task in minutes and connect with trusted taskers in your
                area. From home repairs to errands, TaskMatch makes it easy.
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<AddIcon />}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  Post a Task
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PersonIcon />}
                  sx={{
                    borderColor: theme.palette.primary.main,
                    color: theme.palette.primary.main,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    '&:hover': {
                      borderColor: theme.palette.primary.dark,
                      backgroundColor: 'rgba(0, 212, 170, 0.04)',
                    },
                  }}
                >
                  Register as Tasker
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Content - Illustration */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '120%',
                  height: '120%',
                  background:
                    'radial-gradient(circle, rgba(0,212,170,0.1) 0%, transparent 70%)',
                  borderRadius: '50%',
                  zIndex: 0,
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 2,
                  p: 4,
                }}
              >
                {/* People illustrations - Using emoji/icons as placeholders */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    backgroundColor: '#FFE5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    transform: 'translate(-20px, -10px)',
                  }}
                >
                  👩‍💼
                </Box>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    backgroundColor: '#E5F3FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    transform: 'translate(0px, -30px)',
                  }}
                >
                  👨‍💻
                </Box>
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    borderRadius: '50%',
                    backgroundColor: '#FFF5E5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.2rem',
                    transform: 'translate(20px, -5px)',
                  }}
                >
                  👩‍🔧
                </Box>
                <Box
                  sx={{
                    width: 85,
                    height: 85,
                    borderRadius: '50%',
                    backgroundColor: '#F0FFF0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.1rem',
                    transform: 'translate(-40px, 20px)',
                  }}
                >
                  👨‍🍳
                </Box>
                <Box
                  sx={{
                    width: 95,
                    height: 95,
                    borderRadius: '50%',
                    backgroundColor: '#FFF0F5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.3rem',
                    transform: 'translate(10px, 25px)',
                  }}
                >
                  👩‍🎨
                </Box>
                <Box
                  sx={{
                    width: 75,
                    height: 75,
                    borderRadius: '50%',
                    backgroundColor: '#F5F0FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.9rem',
                    transform: 'translate(45px, 5px)',
                  }}
                >
                  👨‍🔬
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;