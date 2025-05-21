import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme
} from '@mui/material';
import {
  PlaylistAdd as TaskIcon
} from '@mui/icons-material';
import Button from '../common/Button';
import TextField from '../common/TextField';
import SectionHeading from '../common/SectionHeading';
import IconBox from '../common/IconBox';
import { useNavigate, useLocation } from 'react-router-dom';

const TaskBudget = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [budget, setBudget] = useState('');

  const steps = [
    { label: 'Title & Date', path: '/post-task' },
    { label: 'Location', path: '/task-location' },
    { label: 'Details', path: '/task-details' },
    { label: 'Budget', path: '/task-budget' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the budget submission
    navigate('/get-quotes');
  };

  return (
    
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 3,
              p: 3,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
              position: 'sticky',
              top: 24
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
              <IconBox
                icon={<TaskIcon fontSize="medium" />}
                backgroundColor={theme.palette.primary.light}
                size={52}
                sx={{ mr: 2 }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: 600, color: theme.palette.secondary.main }}
              >
                Post a task
              </Typography>
            </Box>

            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {steps.map((step, index) => {
                const isActive = location.pathname === step.path;
                return (
                  <Box
                    key={index}
                    onClick={() => navigate(step.path)}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      cursor: 'pointer',
                      backgroundColor: isActive ? theme.palette.primary.light : 'transparent',
                      color: isActive ? theme.palette.primary.main : theme.palette.text.secondary,
                      fontWeight: isActive ? 600 : 400,
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Typography variant="body1">{step.label}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: 3,
              p: 4,
              boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
            }}
          >
            <SectionHeading 
              title="Suggest your budget" 
              variant="h4" 
              sx={{ mb: 5 }}
            />

            <Box component="form" onSubmit={handleSubmit}>
              <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                What is your budget?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                You can always negotiate the final price.
              </Typography>

              <TextField
                placeholder="Enter budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                InputProps={{
                  startAdornment: <Typography sx={{ mr: 1 }}>$</Typography>
                }}
                fullWidth
              />

              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 18 }}>
                <Button
                  variant="secondary"
                  size="large"
                  onClick={() => navigate('/task-details')}
                >
                  Back
                </Button>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  disabled={!budget}
                >
                  Get quotes
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskBudget;
