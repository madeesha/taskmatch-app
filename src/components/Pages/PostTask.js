import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  FormControlLabel, 
  Checkbox,
  useTheme 
} from '@mui/material';
import { 
  KeyboardArrowDown as ChevronDownIcon,
  PlaylistAdd as TaskIcon
} from '@mui/icons-material';
import Button from '../common/Button';
import TextField from '../common/TextField';
import SectionHeading from '../common/SectionHeading';
import IconBox from '../common/IconBox';
import { useApp } from '../../contexts/AppContext';

/**
 * PostTask component for creating new tasks
 */
const PostTask = () => {
  const theme = useTheme();
  
  // Form state
  const [taskDescription, setTaskDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState('flexible');
  const [needsSpecificTime, setNeedsSpecificTime] = useState(false);

  // Steps in the task creation process
  const steps = [
    { label: 'Title & Date', isActive: true },
    { label: 'Location', isActive: false },
    { label: 'Details', isActive: false },
    { label: 'Budget', isActive: false }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { taskDescription, selectedDate, needsSpecificTime });
    // Would move to next step in a complete implementation
  };

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Grid container spacing={4}>
        {/* Left Sidebar */}
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
                sx={{
                  fontWeight: 600,
                  color: theme.palette.secondary.main
                }}
              >
                Post a task
              </Typography>
            </Box>
            
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {steps.map((step, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    cursor: 'pointer',
                    backgroundColor: step.isActive 
                      ? theme.palette.primary.light 
                      : 'transparent',
                    color: step.isActive 
                      ? theme.palette.primary.main 
                      : theme.palette.text.secondary,
                    fontWeight: step.isActive ? 600 : 400,
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Typography variant="body1">{step.label}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Main Form Area */}
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
              title="Let's start with the basics" 
              variant="h4" 
              sx={{ mb: 5 }}
            />
            
            <Box component="form" onSubmit={handleSubmit}>
              {/* Task Description */}
              <Box sx={{ mb: 4 }}>
                <TextField
                  label="In a few words, what do you need done?"
                  multiline
                  rows={4}
                  placeholder="Describe your task..."
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  fullWidth
                  sx={{ mb: 1 }}
                />
              </Box>

              {/* Date Selection */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 2,
                    fontWeight: 500,
                    color: theme.palette.text.primary
                  }}
                >
                  When do you need this done?
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                  <Button
                    variant={selectedDate === 'on-date' ? 'primary' : 'outlined'}
                    onClick={() => setSelectedDate('on-date')}
                    endIcon={<ChevronDownIcon />}
                  >
                    On date
                  </Button>
                  
                  <Button
                    variant={selectedDate === 'before-date' ? 'primary' : 'outlined'}
                    onClick={() => setSelectedDate('before-date')}
                    endIcon={<ChevronDownIcon />}
                  >
                    Before date
                  </Button>
                  
                  <Button
                    variant={selectedDate === 'flexible' ? 'primary' : 'outlined'}
                    onClick={() => setSelectedDate('flexible')}
                  >
                    I'm flexible
                  </Button>
                </Box>

                {/* Specific Time Checkbox */}
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={needsSpecificTime}
                      onChange={(e) => setNeedsSpecificTime(e.target.checked)}
                      sx={{
                        color: theme.palette.primary.main,
                        '&.Mui-checked': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label="I need a certain time of day"
                />
              </Box>

              {/* Next Button */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 6 }}>
                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                >
                  Next
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostTask;