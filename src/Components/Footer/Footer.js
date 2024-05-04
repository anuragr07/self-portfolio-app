import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.scss';

// Fontawesome imports
import Logo from '../Logo/Logo';



export default function Footer(){

    // Navigation Links
    const pageLinks = [
        { linkName: "Home", linkVal: "home" },
        { linkName: "Projects", linkVal: "projects"},
        { linkName: "Skills", linkVal: "skills"},
        { linkName: "Experience", linkVal: "experience"},
        { linkName: "Contact Me", linkVal: "contact-me"}
    ]

    // Function to get all the links 
    function getLinks(){
        const links = pageLinks.map((link, key) => {
            if (link.linkVal === "home") { return <li><a href="/" key={key}>{link.linkName}</a></li> }
            else{ return <li><a href={"#" + link.linkVal} key={key}>{link.linkName}</a></li> }
        });
        return links;
    }

    return(
        <div className="my-footer">
        <Container>
            <Row xs={1} lg={3}>
                <Col className="d-flex align-items-center justify-content-center">
                    <h3>
                        <Logo></Logo>
                    </h3>
                </Col>
                <Col>
                    <div className='footer-links'>
                    <h5>Menu</h5>
                        <ul>
                            {getLinks()}
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className='footer-links'>
                    <h5>Stay Connected</h5>
                        
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