import React from "react";
import "./Home.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';
import About from "./About/About";
import Projects from "./Projects/Projects";
import SkillTabs from "./SkillTabs/SkillTabs";
import { Col, Container, Row } from "react-bootstrap";
import Experience from "./Experience/Experience";
import ContactMe from "./ContactMe/ContactMe";

export default function Home(){
    return(
        <div>

            {/* Banner starts here */}
            <Jumbotron fluid>
                <div className="banner-img">
                   <div className="banner-text">
                        <h2>Hi, I am</h2>
                        <h1>Anurag Rawal</h1>
                        <About></About>
                    </div>
                </div>
            </Jumbotron>
            {/* Banner ends here */}

            <Container className="rounded-profile">
                <Row xs={1} md={2}>
                    <Col className="rounded-profile-col text-align-center">
                        {/* Rounded profile */}
                        <div className="banner-img-rounded"></div>
                    </Col>
                    <Col>
                        {/* About me text */}
                        <div className="about-me-text">
                            <h2>Hi, I am</h2>
                            <h1>Anurag Rawal</h1>
                            <p>2nd-year student in Post Baccalaureate Diploma in Computing and Information Systems acquiring knowledge in Modern web development frameworks and libraries including MERN stack, Spring Boot. Aiding users for the technical issues and developing quality solutions for the company while working in Information Systems team.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Projects></Projects>
            {/* <Skills></Skills> */}
            <SkillTabs></SkillTabs>
            <Experience></Experience>
            <ContactMe></ContactMe>
        </div>
    )
}