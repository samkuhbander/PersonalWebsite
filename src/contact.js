import React from "react";
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

function Contact() {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: 70 }}> Contact Me </h1>
                <h1 className="typewriter"> kuhbandersam@gmail.com</h1>
                <a href="mailto: kuhbandersam@gmail.com" style={{ textDecoration: 'none' }}>
                    <div style={{ margin: 50 }}>
                        <Button variant="contained" size="large">
                            <i>Send Me An Email</i>
                        </Button>
                    </div>
                </a>
                <div className='animation'>
                    <div className='i-mail'>
                        <div className='mail-anim'></div>
                    </div>
                    <div className='line'></div>
                    <div className='i-success'>
                        <div className='success-anim'></div>
                    </div>
            </div>
            </div>
        </div>

    );
}

export default Contact;