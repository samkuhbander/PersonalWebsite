import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ExperienceCard = (props) => {
  return (
    <Card sx={{ m:5, borderRadius: 4, border: 4, borderColor: "gray", textAlign: "center"}}>
      <CardMedia
        component="img"
        alt= {props.alt}
        image= {props.img}
        style= {{width:"15vw", margin:"auto", padding:"5%"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" style={{fontSize: "4vh"}}component="div">
          {props.title}
        </Typography>
        <Typography variant="h5" style={{fontSize: "3vh", fontWeight: 'bold'}}>
          {props.date}
        </Typography>
        <Typography variant="p" style={{fontSize: "2vh"}}>
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
} 

export default ExperienceCard;