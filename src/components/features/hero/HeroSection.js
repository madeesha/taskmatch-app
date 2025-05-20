import React from 'react';
import { Container, Grid, Typography, Box, useTheme } from '@mui/material';
import { Add as AddIcon, Person as PersonIcon } from '@mui/icons-material';
import Button from '../../common/Button';
import peopleGroup from '../../../assets/images/people-group.png';

/**
 * Hero section component for the homepage
 */
const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #F7FAFC 0%, #E3FAF0 50%, #EDF2F7 100%)',
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
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              > 
                <Box
                  component="span"
                  sx={{ color: theme.palette.title.text }}
                >
                  Find Help or Offer Skills.{' '}
                </Box>{' '}
                <Box
                  component="span"
                  sx={{ color: theme.palette.primary.main }}
                >
                  TaskMatch
                </Box>{' '}
                <Box
                  component="span"
                  sx={{ color: theme.palette.title.text }}
                >
                  Gets It Done.
                </Box>{' '}
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
                  variant="primary"
                  size="large"
                  startIcon={<AddIcon />}
                >
                  Post a Task
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PersonIcon />}
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
              <img
                src={peopleGroup}
                alt="People connecting through TaskMatch"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;