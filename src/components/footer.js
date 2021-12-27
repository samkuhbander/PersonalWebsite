import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from '@mui/material/Container';

import {
    faLinkedin,
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="Footer">
            <Container>
            <a href="https://www.linkedin.com/in/samuel-kuhbander/"
                rel="noopener noreferrer"
                className="linkedin social" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.twitter.com/kuhbandersam"
                rel="noopener noreferrer"
                className="twitter social" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/samkuhbander"
                rel="noopener noreferrer"
                className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/samkuhbander"
                rel="noopener noreferrer"
                className="github social" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            </Container>
        </div>
        

    );
}

export default Footer;