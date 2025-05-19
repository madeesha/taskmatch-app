import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';

const TaskCard = ({ task }) => {
  const theme = useTheme();

  const getIconComponent = (category) => {
    switch (category) {
      case 'paint':
        return '🎨';
      case 'move':
        return '🚚';
      case 'pets':
        return '⭐';
      default:
        return '📋';
    }
  };

  const getIconBackground = (category) => {
    switch (category) {
      case 'paint':
        return '#E8F5E9';
      case 'move':
        return '#E3F2FD';
      case 'pets':
        return '#FFF9C4';
      default:
        return '#F5F5F5';
    }
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        border: '1px solid #E2E8F0',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {/* Icon */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            backgroundColor: getIconBackground(task.category),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 2,
            fontSize: '1.5rem',
          }}
        >
          {getIconComponent(task.category)}
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            mb: 2,
            color: theme.palette.secondary.main,
            fontSize: '1.25rem',
          }}
        >
          {task.title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {task.description}
        </Typography>

        {/* Price and Location */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 'auto',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              fontSize: '1.5rem',
            }}
          >
            {task.price}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocationIcon
              sx={{ fontSize: 16, color: theme.palette.text.secondary }}
            />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary }}
            >
              {task.location}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskCard;