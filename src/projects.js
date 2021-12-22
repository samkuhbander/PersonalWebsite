import React from "react";
import ProjectCard from "./components/projectCard";

function Project() {
    return (
        <div>
            <ProjectCard
                title = "Title"
                description = "Description text goes here"
                link = "https://www.instagram.com/samkuhbander"
                alt = "Alternate text"
                img = "/static/media/LockheedHeadshot.a1a72983.jpg"
            >
            </ProjectCard>
        </div>
    );
}

export default Project;