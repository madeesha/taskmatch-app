import React from 'react';
import { Box, Container, useTheme } from '@mui/material';
import Button from '../common/Button';
import HeroSection from '../features/hero/HeroSection';
import TaskGrid from '../features/tasks/TaskGrid';
import SectionHeading from '../common/SectionHeading';
import { useApp } from '../../contexts/AppContext';

/**
 * HomePage component that displays the main landing page content
 */
const HomePage = () => {
  const theme = useTheme();
  const { tasks } = useApp();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Tasks Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Box sx={{ mb: 6 }}>
          <SectionHeading
            title="Browse Featured Tasks"
            action={
              <Button
                variant="text"
                sx={{
                  fontSize: '1.1rem',
                }}
              >
                See All →
              </Button>
            }
          />
          <TaskGrid tasks={tasks} />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;