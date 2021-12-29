import { Container, Typography } from "@mui/material";
import React from "react";
import ExperienceCard from "./components/experienceCard";
import Grid from '@mui/material/Grid';
import MiamiLogo from "../src/static/miamiLogo.jpg";
import AFLCMC from "../src/static/AFLCMC.jpg";
import LockheedLogo from "../src/static/LockheedMartinLogo.jpg";

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
                        title="Undergraduate Researcher at Miami University"
                        description="Studying blockchain technologies and the applications of decentralized networks. 
                                Developing an application that allows the transfer of NFT’s using Solidity and React."
                        date="July 2021 - Present"
                        img={MiamiLogo}
                        alt="Miami University Logo"
                    >
                    </ExperienceCard>
                </Grid>
                <Grid item xs={12} md={5} xl={4}>
                    <ExperienceCard
                        title="Premier College Intern Program at AFLCMC"
                        description="Position as student trainee at Wright Patterson AFB, Ohio at the Air Force Life Cycle Management Center. 
                                    Provides on the job experience and training to futher technical development"
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