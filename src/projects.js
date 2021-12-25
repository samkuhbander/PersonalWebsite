import React from "react";
import ProjectCard from "./components/projectCard";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Reimagine1 from "../src/static/ReimagineCollab1.jpg";
import MiamiCards1 from "../src/static/MiamiCards1.jpg";


function Project() {
    return (
        <div>
            <div style={{textAlign: 'center', padding:40}}>
                <h1>My Projects</h1>
            </div>
            
            <Grid container>
                <Grid>
                    <ProjectCard
                        title="Reimagine-Collaboration"
                        description="Created a website for my Lockeed Martin Leadership Institute project. Website uses NodeJS, React, Contentful, and GraphQL.  "
                        link="https://reimagine-collaboration.com/"
                        alt="Reimagine Collaboration Webpage"
                        img= {Reimagine1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid>
                    <ProjectCard
                        title="Miami Cards"
                        description="Created a web application that allows for the buying and exchange of NFTs. Created using React and Solidity on the Etheruem Blockchain."
                        link="https://github.com/wsl-miami/miamicards"
                        alt="Miami Cards"
                        img= {MiamiCards1}
                    >
                    </ProjectCard>
                </Grid>
                <Grid>
                    <ProjectCard
                        title="Title 3"
                        description="Description text goes here"
                        link="https://www.instagram.com/samkuhbander"
                        alt="Alternate text"
                        img="/static/media/LockheedHeadshot.a1a72983.jpg"
                    >
                    </ProjectCard>
                </Grid>
                <Grid>
                    <ProjectCard
                        title="Title 4"
                        description="Description text goes here"
                        link="https://www.instagram.com/samkuhbander"
                        alt="Alternate text"
                        img="/static/media/LockheedHeadshot.a1a72983.jpg"
                    >
                    </ProjectCard>
                </Grid>
            </Grid>
        </div>
    );
}

export default Project;