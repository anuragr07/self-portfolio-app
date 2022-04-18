import React from "react";
import { Container, Row } from "react-bootstrap";
import Skill from "./Skill/Skill";
import "./Skills.scss"

// TODO: Get the skills array here and pass it as props or process it as props and make skills display

export default function Skills(){
    return(
        <>
            {/* Heading code */}
            <Container>
                <div className="heading-1">
                    <h1>My skills</h1>
                </div>
            </Container>

            {/* Section Code */}
            <div className="skills-wrapper">
                <Container>
                    <Row className="justify-content-md-center">
                        <Skill></Skill>
                    </Row>
                </Container>
            </div>
        </>
    )
}