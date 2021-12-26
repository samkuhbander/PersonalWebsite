import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../css/projects.css";

const ProjectCard = (props) => {
  return (
    <Card sx={{ width: 500, m:5, borderRadius: 4, border: 10, borderColor: "black", transition: "transform 0.15s ease-in-out", "&:hover": { transform: "scale3d(1.10, 1.10, 1)" }}}>
      <div className="mediaBackground">
      <CardMedia
        component="img"
        alt= {props.alt}
        image= {props.img}
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {props.title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.link}
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: 'none'}}>
                    <Button sx={{ml: 2}} variant="outlined" size="large">View</Button>
                </a>
      </CardActions>
    </Card>
  );
} 

export default ProjectCard;