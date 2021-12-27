import React from "react";
import Headshot from "./static/LockheedHeadshot.jpg";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Grid';

function Home() {
    return (
        <div>
            <Container maxWidth="md" sx={{ display: "block", marginX: "auto", textAlign: "center" }}>
            <h1 style={{fontSize: "6vw"}}>
                Sam Kuhbander
            </h1>
            <h1 style={{fontSize: "4vw"}}> A software developer</h1>
            <Avatar alt="Sam Kuhbander" src={Headshot} sx={{ width: "50%", height: "100%", margin: "10%", display: "block", marginX: "auto"}}/>
            </Container>
        </div>
    );
}

export default Home;