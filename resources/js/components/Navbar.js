import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <Box px={{ xs: 1, md: 3, lg: 5 }} py={1}>
      <Stack
        direction={{xs: 'column', md: 'row'}}
        justifyContent="space-between"
        alignItems={{xs: 'flex-start', md: 'flex-end'}}
      >
        <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
          <Typography variant="h3">
            LOGO
          </Typography>
        </Box>
        <Stack
          spacing={2}
          direction="row"
          alignItems="center"
        >
          <Button variant="contained" onClick={() => navigate('/button-1')}>Button 1</Button>
          <Button variant="contained" onClick={() => navigate('/button-2')}>Button 2</Button>
          <Button variant="contained" onClick={() => navigate('/button-3')}>Button 3</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Navbar;
