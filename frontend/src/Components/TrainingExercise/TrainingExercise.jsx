import React from 'react';
import {Box}from '@mui/material';
import "./TrainingExercise.css";
import {Button} from '@mui/material';

const btn = [
  {
    value: "a",
    color: "primary"
  },
  {
    value: "b",
    color: "secondary"
  },
  {
    value: "c",
    color: "success"
  },
  {
    value: "e",
    color: "error"
  },
  {
    value: "f",
    color: "warning"
  },
]

const TrainingExercise = () => {
  return (
    <>
    <Box
    sx={{
      py: 2,
      display: 'grid',
      gap: 2,
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
  >
    {btn.map((arr, index) => (
<Button
 color={arr.color} variant="contained" key={index}
>{arr.value}</Button>
    ))}
  </Box>
    </>
  )
}

export default TrainingExercise