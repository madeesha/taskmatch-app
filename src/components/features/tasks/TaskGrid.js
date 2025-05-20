import React from 'react';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';

/**
 * Grid component for displaying multiple task cards
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tasks - Array of task data objects
 */
const TaskGrid = ({ tasks }) => {
  return (
    <Grid container spacing={4}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <TaskCard task={task} />
        </Grid>
      ))}
    </Grid>
  );
};

TaskGrid.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskGrid;