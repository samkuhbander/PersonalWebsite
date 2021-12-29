import React from "react";
import Headshot from "./static/LockheedHeadshot.jpg";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Grid';
import { Typography } from "@mui/material";

function Home() {
    return (
        <div>
            <Container maxWidth="md" sx={{ display: "block", marginX: "auto", textAlign: "center" }}>
                <Typography variant="h2" sx={{m:4}}> Sam Kuhbander </Typography>
            <Avatar alt="Sam Kuhbander" src={Headshot} sx={{ width: "50%", height: "100%", margin: "5%", display: "block", marginX: "auto"}}/>
            <Typography variant="h4" sx={{m:4}}>Hi my name is Sam Kuhbander I am a software engineering major at Miami University.  
            Software engineering has allowed me to combine critical thinking, 
            problem solving, and creativity with technical skills in order to solve 
            complex problems. I made this website using React in order to showcase 
            some of my projects and experience.</Typography>
            <Typography variant="h4" sx={{m:4}}>On campus I am researching
            blockchain technology and I am developing an application that allows 
            for the exchange and purchase of NFTs. I am also a member of Cohort X of the Lockheed 
            Martin Leadership Institute and recolonized my fraternity Kappa Sigma at Miami University.</Typography>
            <Typography variant="h4" sx={{m:4}}>Thank you for taking a look at
            my website and feel free to reach out to me.</Typography>
            </Container>
        </div>
    );
}

export default Home;