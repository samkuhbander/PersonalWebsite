import React from "react";
import Headshot from "./static/LockheedHeadshot.jpg";
import Avatar from '@mui/material/Avatar';

function Home() {
    return (
        <div>
            <div style={{textAlign: "center"}}>
            <h1 style={{fontSize: "90px"}}>
                Sam Kuhbander
            </h1>
            <h1> A software developer</h1>
            <Avatar alt="Sam Kuhbander" src={Headshot} sx={{ width: 470, height: 470, display: "block", marginX: "auto"}}/>
            </div>
        </div>
    );
}

export default Home;