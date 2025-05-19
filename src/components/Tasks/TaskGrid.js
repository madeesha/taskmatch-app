import React from 'react';
import { Grid } from '@mui/material';
import TaskCard from './TaskCard';
import { useApp } from '../../contexts/AppContext';

const TaskGrid = () => {
  const { tasks } = useApp();

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

export default TaskGrid;