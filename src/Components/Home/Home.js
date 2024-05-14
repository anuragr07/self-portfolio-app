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
                            <p>Experienced Software Engineer professional with 2+ years of proven experience in the industry working in different sectors as Service Based and Sales focussed companies, along with PG Diploma Graduate in Computer and Information Systems.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Projects></Projects>
            {/* <Skills></Skills> */}
            <SkillTabs></SkillTabs>
            <Experience></Experience>
            <ContactMe>c</ContactMe>
        </div>
    )
}