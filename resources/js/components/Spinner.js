import React, { useState } from 'react';
import { Box, Backdrop, CircularProgress, Stack, Typography } from '@mui/material';

const Spinner = ({ loading }) => {

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default Spinner;
