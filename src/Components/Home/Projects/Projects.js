import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss"

export default function Projects(){
    return(
        <Container>
            <div className="heading-1">
                <h1>Projects</h1>
            </div>

            {/* - Make the spacing right for the cards*/}
            {/* - Confirm it is responsive - DONE*/}
            {/* - If not, thm make it responsive - DONE */}
            <Row>
                <ProjectCard className="col-spacing"></ProjectCard>
                <ProjectCard></ProjectCard>
            </Row>
        </Container>
    )
}