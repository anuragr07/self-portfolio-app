import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss';

// Fontawesome imports
import Logo from '../Logo/Logo';

export default function Footer(){
    return(
        <div className="my-footer">
        <Container>
            <Row xs={1} lg={4}>
                <Col className="d-flex align-items-center justify-content-center">
                    <h3>
                        <Logo ></Logo>
                    </h3>
                </Col>
                <Col>
                    <div className='footer-links'>
                    <h5>Menu</h5>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="index.html">Web Designs</a></li>
                            <li><a href="index.html">My work</a></li>
                            <li><a href="index.html">My Resume</a></li>
                            <li><a href="index.html">Contact</a></li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='footer-links'>
                    <h5>My Work</h5>
                        <ul>
                            <li><a href="index.html">Website Designs</a></li>
                            <li><a href="index.html">Ajax Forms</a></li>
                            <li><a href="index.html">My Projects</a></li>
                            <li><a href="index.html">Website Content</a></li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='footer-links'>
                    <h5>Reach me at:</h5>
                        <ul>
                            <li><a href="index.html">Burnaby, BC V5A1C1</a></li>
                            <li><a href="index.html">anuragr07@yahoo.com</a></li>
                            <li><a href="index.html">+1 (778) 788-6322</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container >
            <Row>
                <Col>
                    <div className='footer-bottom'>
                        Anurag Rawal 2021
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    )
}