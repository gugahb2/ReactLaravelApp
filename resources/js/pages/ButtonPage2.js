import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Spinner from '../components/Spinner';
import useAssetsForButton2 from '../hooks/useAssetsForButton2';
import AssetItem from '../components/AssetItem';

const ButtonPage2 = () => {
  const { result, loading, error } = useAssetsForButton2();

  return (
    <React.Fragment>
      <Spinner loading={loading} />
      {!error && result && (
        <Container maxWidth="lg">
          <Box py={5}>
            <Typography variant="h6" sx={{ pb: 3 }}>
              Result for button 2
            </Typography>
            <Grid container spacing={2} alignItems="stretch">
              {result.map((item, index) => (
                <Grid key={index} item xs={6} md={4} lg={3}>
                  <AssetItem {...item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </React.Fragment>
  )
}

export default ButtonPage2;
