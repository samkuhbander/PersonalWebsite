import React from "react";
import ProjectCard from "./components/projectCard";
import Container from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Reimagine1 from "../src/static/ReimagineCollab1.jpg";
import MiamiCards1 from "../src/static/MiamiCards1.jpg";
import OffCampus1 from "../src/static/OffCampus1.jpg";
import Moviefy1 from "../src/static/Moviefy1.jpg";
import PersonalWebsite1 from "../src/static/PersonalWebsite1.jpg";
import WordleClone1 from "../src/static/WordleClone1.jpg";
import { Typography } from "@mui/material";

function Project() {
    return (
        <div>
            <Container sx={{ display: "block", marginX: "auto"}}>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h1" sx={{m:4}}>My Projects</Typography>
                </div>
            </Container>
            <Grid container>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="Miami Cards"
                        description="Created a web application that allows for the buying and exchange of NFTs. Created using React and Solidity on the Ethereum Blockchain, the concept was to allow Miami University to create NFTs of their student-athletes."
                        link="https://github.com/wsl-miami/miamicards"
                        alt="Miami Cards"
                        img={MiamiCards1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="Wordle Clone"
                        description="Created a clone of the popular word game Wordle that allows for multiple replays in a given day."
                        link="https://github.com/samkuhbander/wordle-clone"
                        alt="Wordle Clone"
                        img={WordleClone1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="Reimagine-Collaboration"
                        description="Created a website for my Lockheed Martin Leadership Institute Cohort's project Reimagine-Collaboration. This allowed us to post content about the conference and showcase our members. The website uses Node JS, React, Contentful, and GraphQL."
                        link="https://reimagine-collaboration.com/"
                        alt="Reimagine Collaboration Webpage"
                        img={Reimagine1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="This Website"
                        description="Check out the code used for this website on GitHub. I coded this website using React as a personal portfolio."
                        link="https://github.com/samkuhbander/PersonalWebsite"
                        alt="Personal Website"
                        img={PersonalWebsite1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="Off-Campus"
                        description="Created a web application for my project management class that showed rental properties around Oxford, Ohio. The site was coded in HTML and used a PHP backend to connect to an mySQL database. It also utilized the Google Maps api to show property locations."
                        link="https://github.com/samkuhbander/OffCampus-ISA-406-"
                        alt="Off-Campus"
                        img={OffCampus1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid item xs={12} md={6} xl={4}>
                    <ProjectCard
                        title="Moviefy"
                        description="A movie catalog application created for a software engineering class.  I used HTML, Bootstrap, and PHP to create the application and I connected it to a mySQL database. It allowed users to create and sign into accounts as well as view different movies that were listed and leave comments. The web application was hosted using AWS."
                        link="https://github.com/jonesn5/Moviefy"
                        alt="Moviefy"
                        img={Moviefy1}
                    >
                    </ProjectCard>
                </Grid>
            </Grid>
        </div>
    );
}

export default Project;