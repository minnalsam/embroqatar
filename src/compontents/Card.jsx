import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,CardActionArea,CardActions  } from '@mui/material';

const CardContainer = ({ title,img}) => {
  return (
      <Card sx={{ maxWidth:200,height:350} }>
          <CardActionArea>
              <CardMedia component="img" height="100" image={ img} alt='Embridery' />
              <CardContent>    
                  <Typography>{title}</Typography>
              </CardContent>
          </CardActionArea>
          <CardActions>
              <Button size="small" color="primary">Go Details</Button>
          </CardActions>
    </Card>
  )
}

export default CardContainer