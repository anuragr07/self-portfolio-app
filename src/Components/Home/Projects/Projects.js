import React from "react";
import { Container, Row } from "react-bootstrap";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./Projects.scss"

export default function Projects(){

    const listOfProjects = ["Diversity", "Portfolio", "travel"];

    function getProjectCards(){
        const projectCards = listOfProjects.map((project, key) => <ProjectCard name={project} key={key}></ProjectCard>)
        return projectCards;
    }

    return(
        <Container>
            {/* Heading */}
            <HeadingMain name='Projects'></HeadingMain>

            {/* - Make the spacing right for the cards*/}
            {/* - Confirm it is responsive - DONE*/}
            {/* - If not, thm make it responsive - DONE */}

            {/* Contect */}
            <Row>

                {getProjectCards()}

                {/* <ProjectCard className="col-spacing"></ProjectCard> */}
                {/* <ProjectCard></ProjectCard> */}
            </Row>
        </Container>
    )
}