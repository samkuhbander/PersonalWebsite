import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProjectCard = (props) => {
  return (
    <Card sx={{ width: 500, m:6}}>
      <CardMedia
        component="img"
        alt= {props.alt}
        image= {props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.link}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none'}}>
                    <Button variant="outlined" size="large">View</Button>
                </a>
      </CardActions>
    </Card>
  );
} 

export default ProjectCard;