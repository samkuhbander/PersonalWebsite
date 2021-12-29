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
                <Typography variant="h3"> A software developer </Typography>
            <Avatar alt="Sam Kuhbander" src={Headshot} sx={{ width: "50%", height: "100%", margin: "10%", display: "block", marginX: "auto"}}/>
            </Container>
        </div>
    );
}

export default Home;