import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  useTheme
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import Button from '../common/Button';
import TextField from '../common/TextField';
import IconBox from '../common/IconBox';
import { useNavigate, useLocation } from 'react-router-dom';

const TaskLocationPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [locationType, setLocationType] = useState('in-person');

  const steps = [
    { label: 'Title & Date', path: '/post-task' },
    { label: 'Location', path: '/task-location' },
    { label: 'Details', path: '/task-details' },
    { label: 'Budget', path: '/task-budget' }
  ];

  const handleLocationTypeChange = (type) => {
    setLocationType(type);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {/* Sidebar Steps */}
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
                icon={<LocationOnIcon fontSize="medium" />}
                backgroundColor={theme.palette.primary.light}
                size={52}
                sx={{ mr: 2 }}
              />
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main
                }}
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
                      backgroundColor: isActive
                        ? theme.palette.primary.light
                        : 'transparent',
                      color: isActive
                        ? theme.palette.primary.main
                        : theme.palette.text.secondary,
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

        {/* Main Content */}
        <Grid item xs={12} md={9}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h2" sx={{ mb: 6, textAlign: 'left', fontWeight: 700, color: theme.palette.secondary.main }}>
              Tell us where
            </Typography>

            {/* Location Type Options */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
                <Paper 
                elevation={0} 
                sx={{ 
                    p: 2, // reduced padding
                    borderRadius: 2, 
                    height: '100%',
                    border: '2px solid',
                    borderColor: locationType === 'in-person' ? theme.palette.secondary.main : 'transparent',
                    backgroundColor: locationType === 'in-person' ? theme.palette.secondary.main : theme.palette.background.paper,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                    borderColor: locationType === 'in-person' ? theme.palette.secondary.main : theme.palette.primary.main,
                    }
                }}
                onClick={() => handleLocationTypeChange('in-person')}
                >
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                    }}
                >
                    <IconBox 
                    icon={<LocationOnIcon fontSize="medium" sx={{ color: theme.palette.secondary.main }} />} 
                    backgroundColor="white"
                    size={48} // reduced size
                    />
                    <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        mt: 1.5, 
                        fontWeight: 600, 
                        color: locationType === 'in-person' ? 'white' : theme.palette.secondary.main
                    }}
                    >
                    In-person
                    </Typography>
                    <Typography 
                    variant="body2" 
                    sx={{ 
                        mt: 0.5, 
                        textAlign: 'center',
                        color: locationType === 'in-person' ? 'white' : theme.palette.text.secondary
                    }}
                    >
                    Select this if you need the Tasker physically there
                    </Typography>
                </Box>
                </Paper>
            </Grid>

            {/* Online Button - same adjustments */}
            <Grid item xs={12} md={6}>
                <Paper 
                elevation={0} 
                sx={{ 
                    p: 2,
                    borderRadius: 2, 
                    height: '100%',
                    border: '2px solid',
                    borderColor: locationType === 'online' ? theme.palette.secondary.main : 'transparent',
                    backgroundColor: locationType === 'online' ? theme.palette.secondary.main : theme.palette.background.default,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                    borderColor: locationType === 'online' ? theme.palette.secondary.main : theme.palette.primary.main,
                    }
                }}
                onClick={() => handleLocationTypeChange('online')}
                >
                <Box 
                    sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                    }}
                >
                    <IconBox 
                    icon={<PhoneIphoneIcon fontSize="medium" sx={{ color: theme.palette.secondary.main }} />} 
                    backgroundColor="white"
                    size={48}
                    />
                    <Typography 
                    variant="subtitle1" 
                    sx={{ 
                        mt: 1.5, 
                        fontWeight: 600, 
                        color: locationType === 'online' ? 'white' : theme.palette.secondary.main
                    }}
                    >
                    Online
                    </Typography>
                    <Typography 
                    variant="body2" 
                    sx={{ 
                        mt: 0.5, 
                        textAlign: 'center',
                        color: locationType === 'online' ? 'white' : theme.palette.text.secondary
                    }}
                    >
                    Select this if the Tasker can do it from home
                    </Typography>
                </Box>
                </Paper>
            </Grid>
            </Grid>

            {/* Suburb Field */}
            <Typography variant="h6" sx={{ mt: 6, mb: 2, fontWeight: 600 }}>
              Where do you need this done?
            </Typography>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 4
            }}>
              <Box
                sx={{
                  mr: 1,
                  border: '1px solid',
                  borderColor: theme.palette.divider,
                  borderRadius: 1,
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
              >
                <img
                  src="https://flagcdn.com/48x36/au.png"
                  alt="Australia"
                  width="24"
                  height="18"
                  style={{ borderRadius: 2 }}
                />
                <KeyboardArrowDownIcon sx={{ ml: 1, color: theme.palette.text.secondary }} />
              </Box>
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Enter a suburb"
                InputProps={{
                  startAdornment: (
                    <LocationOnIcon
                      sx={{
                        color: theme.palette.text.secondary,
                        mr: 1
                      }}
                    />
                  ),
                }}
              />
            </Box>

            {/* Navigation */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 8
            }}>
              <Button onClick={() => navigate('/post-task')}
                variant="outlined"
                sx={{ minWidth: 120 }}
              >
                Back
              </Button>
              <Button
                onClick={() => navigate('/task-details')}
                variant="primary"
                sx={{ minWidth: 120 }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskLocationPage;
