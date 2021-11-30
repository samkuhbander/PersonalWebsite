import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div class="Footer">
            <a href="https://www.linkedin.com/in/samuel-kuhbander/"
                className="linkedin social" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.twitter.com/kuhbandersam"
                className="twitter social" target="_blank">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/samkuhbander"
                className="instagram social" target="_blank">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://github.com/samkuhbander"
                className="github social" target="_blank">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        </div>
        
    );
}

export default Footer;