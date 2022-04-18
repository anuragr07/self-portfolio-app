import React from "react";
import { Container, Row } from "react-bootstrap";
import Skill from "./Skill/Skill";
import "./Skills.scss"

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