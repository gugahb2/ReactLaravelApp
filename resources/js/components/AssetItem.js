import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material';
import DefaultImage from '../../../public/No-image.jpg';

const AssetItem = ({ Title, Type, Year, imdbID, Poster }) => {
  return (
    <Card sx={{ maxWidth: 412, height: '100%' }}>
      {Poster && (
        <CardMedia
          component="img"
          height="420"
          image={Poster !== 'N/A' ? Poster : DefaultImage}
          alt="green iguana"
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Year: {Year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          imdbID: {imdbID}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{Type}</Button>
      </CardActions>
    </Card>
  )
}

export default AssetItem;
