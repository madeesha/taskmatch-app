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
import HeroSection from '../Common/HeroSection';
import TaskGrid from '../Tasks/TaskGrid';

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tasks Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 600,
              }}
            >
              Browse Featured Tasks
            </Typography>
            <Button
              sx={{
                color: theme.palette.primary.main,
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '1.1rem',
              }}
            >
              See All →
            </Button>
          </Box>
          <TaskGrid />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;