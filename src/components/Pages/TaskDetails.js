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
import AddIcon from '@mui/icons-material/Add';
import Button from '../common/Button';
import TextField from '../common/TextField';
import IconBox from '../common/IconBox';
import { useNavigate, useLocation } from 'react-router-dom';

const TaskDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [locationType, setLocationType] = useState('in-person');
  const [details, setDetails] = useState('');

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

        {/* Main form content */}
        <Grid item xs={12} md={9}>
          <Box sx={{ width: '100%' }}>
            <Typography variant="h2" sx={{ mb: 6, fontWeight: 700 }}>
              Provide more details
            </Typography>

            {/* Details TextArea */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              What are the details?
            </Typography>
            <TextField
              placeholder="Write a summary of the key details"
              multiline
              rows={4}
              fullWidth
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              sx={{ mb: 4 }}
            />

            {/* Add images */}
            <Typography variant="h6" sx={{ mb: 1 }}>
              Add images <Typography variant="body2" component="span">(optional)</Typography>
            </Typography>
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: 2,
                backgroundColor: '#f4f5f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                mb: 6,
              }}
            >
              <AddIcon color="primary" fontSize="large" />
            </Box>

            {/* Navigation buttons */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={() => navigate('/post-task/location')}>
                Back
              </Button>
              <Button variant="primary" onClick={() => navigate('/post-task/budget')}>
                Next
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TaskDetails;
