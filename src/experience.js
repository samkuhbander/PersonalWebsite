import { Container, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "./components/experienceCard";
import Grid from '@mui/material/Grid';
import MiamiLogo from "../src/static/miamiLogo.jpg";
import AFLCMC from "../src/static/AFLCMC.jpg";
import LockheedLogo from "../src/static/LockheedMartinLogo.jpg";
import AmazonLogo from "../src/static/AmazonLogo.jpg";

function Experience() {
    return (
        <div>
            <Container sx={{ display: "block", marginX: "auto", textAlign: "center" }}>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h1" sx={{m:4}}>Experience</Typography>
                </div>
            </Container>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5} xl={4}>
                    <ExperienceCard
                        title="Software Development Engineer Intern at Amazon"
                        description="Collaborated with experienced cross-disciplinary Amazonians to
                        conceive, design, and bring innovative products and services to market.
                        Designed and built innovative technologies in a large distributed computing environment, 
                        and helped lead fundamental changes in the industry."
                        date="Sep 2022 - Dec 2022"
                        img={AmazonLogo}
                        alt="Amazon.com Inc."
                    >
                    </ExperienceCard>
                </Grid>
                <Grid item xs={12} md={5} xl={4}>
                    <ExperienceCard
                        title="Premier College Intern Program at AFLCMC"
                        description="Engineer in the Integration and Software Systems Branch of AFLCMC working on avionics 
                        integration, interfaces, computer and software systems, and integrity."
                        date="May 2022 - Aug 2022"
                        img={AFLCMC}
                        alt="Air Force Life Cycle Management Center"
                    >
                    </ExperienceCard>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} md={5} xl={4}>
                    <ExperienceCard
                        title="Undergraduate Researcher at Miami University"
                        description=" Research includes best case practices for Ethereum dApp development leveraging technologies
                        like Solidity, React.js, Web3.js, Ether.js, useDapp, and Truffle. Research also seeks to find real
                        world applications for Ethereum NFTs and semi-fungible tokens."
                        date="July 2021 - May 2022"
                        img={MiamiLogo}
                        alt="Miami University Logo"
                    >
                    </ExperienceCard>
                </Grid>
                <Grid item xs={12} md={5} xl={4}>
                    <ExperienceCard
                        title="Lockheed Martin Leadership Institute"
                        description="Selected for a merit-based, three-year leadership development program. Designed to cultivate professional leaders who think strategically, work collaboratively,
                        communicate effectively, and find innovative solutions to society’s most complex problems."
                        date="January 2020 - Present"
                        img={LockheedLogo}
                        alt="Lockheed Martin"
                    >
                    </ExperienceCard>
                </Grid>
            </Grid>
        </div>
    );
}

export default Experience;