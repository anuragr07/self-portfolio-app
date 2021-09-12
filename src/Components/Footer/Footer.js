import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss';

// Fontawesome imports
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

export default function Footer(){
    return(
        <div>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                            <span>ANURAGR07</span>
                        </div>
                    </Col>
                    <Col>
                    <h5>Menu</h5>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">Web Designs</a></li>
                            <li><a href="index.html">My work</a></li>
                            <li><a href="index.html">My Resume</a></li>
                            <li><a href="index.html">Contact</a></li>
                        </ul>
                    </Col>
                    <Col>
                    <h5>My Work</h5>
                        <ul>
                            <li><a href="index.html">Website Designs</a></li>
                            <li><a href="index.html">Ajax Forms</a></li>
                            <li><a href="index.html">My Projects</a></li>
                            <li><a href="index.html">Website Content</a></li>
                        </ul>
                    </Col>
                    <Col>
                    <h5>Reach me at:</h5>
                        <ul>
                            <li><a href="index.html">Burnaby, BC V5A1C1</a></li>
                            <li><a href="index.html">anuragr07@yahoo.com</a></li>
                            <li><a href="index.html">+1 (778) 788-6322</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}