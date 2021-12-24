import React from "react";
import ProjectCard from "./components/projectCard";
import Grid from '@material-ui/core/Grid'

function Project() {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <ProjectCard
                    title="Title"
                    description="Description text goes here"
                    link="https://www.instagram.com/samkuhbander"
                    alt="Alternate text"
                    img="/static/media/LockheedHeadshot.a1a72983.jpg"
                >
                </ProjectCard>
            </div>
        </div>
    );
}

export default Project;