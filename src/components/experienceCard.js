import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const ExperienceCard = (props) => {
  return (
    <Card sx={{margin:"2vh", padding: "2vh", borderRadius: 4, border: 5, borderColor: "gray", textAlign: "center"}}>
      <CardMedia
        component="img"
        alt= {props.alt}
        image= {props.img}
        style= {{width:"20vw", margin:"auto", padding:"5%"}}
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