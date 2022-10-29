/* eslint-disable */

import * as React from 'react';
import Box from '@mui/material/Box';

export default function PieChart() {
  return (
    <Box
      sx={{
        width: 500,
        height: 200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >pie chart 가 들어갈 자리입니다^^</Box>
  );
}