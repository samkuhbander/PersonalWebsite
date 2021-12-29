import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Contact() {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h1"> Contact Me </Typography>
                <h1 className="typewriter" style={{ fontSize: "4vw"}}> kuhbandersam@gmail.com</h1>
                <a href="mailto: kuhbandersam@gmail.com" style={{ textDecoration: 'none' }}>
                    <div style={{ margin: 50 }}>
                        <Button variant="contained" size="large" sx={{bgcolor: "#00A8E8", ':hover': {bgcolor: 'white', color: "#00A8E8"}, }}>
                            <i>Send Me An Email</i>
                        </Button>
                    </div>
                </a>
            </div>
        </div>

    );
}

export default Contact;