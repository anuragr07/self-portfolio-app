import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import './Footer.scss';


// Fontawesome imports
import Logo from '../Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Footer() {

    // Navigation Links
    const pageLinks = [
        { linkName: "Home", linkVal: "home" },
        { linkName: "Projects", linkVal: "projects" },
        { linkName: "Skills", linkVal: "skills" },
        { linkName: "Experience", linkVal: "experience" },
        { linkName: "Contact Me", linkVal: "contact-me" }
    ]

    // Array for all links
    const linkArray = [
        {
            linkName: 'Linkedin',
            link: "https://www.linkedin.com/in/anuragr07/",
            iconTag: <FontAwesomeIcon icon={faLinkedin} />
        },
        {
            linkName: 'Github',
            link: "https://github.com/anuragr07",
            iconTag: <FontAwesomeIcon icon={faGithub} />
        },
        {
            linkName: 'Instagram',
            link:"https://www.instagram.com/anuragr07/",
            iconTag: <FontAwesomeIcon icon={faInstagram} />
        },
        {
            linkName: 'Email',
            link: "mailto:anuragr07@yahoo.com",
            iconTag: <FontAwesomeIcon icon={faEnvelope} />
        },
        {
            linkName: 'Phone',
            link: "tel:+919915428322",
            iconTag: <FontAwesomeIcon icon={faPhoneAlt} />
        },
    ]

    // generate links to use below
    const links = linkArray.map((linkItem) => {
        return <li><a href={linkItem.link}>{linkItem.iconTag}</a></li>
    })

    // Function to get all the links 
    function getLinks() {
        const links = pageLinks.map((link, key) => {
            if (link.linkVal === "home") { return <li><a href="/" key={key}>{link.linkName}</a></li> }
            else { return <li><a href={"#" + link.linkVal} key={key}>{link.linkName}</a></li> }
        });
        return links;
    }

    return (
        <div className="my-footer mt-5">
            <Container>
                <Row xs={1} lg={3}>
                    <Col className="d-flex align-items-center justify-content-center">
                        <h1>
                            <Logo></Logo>
                        </h1>
                    </Col>
                    <Col className='d-flex justify-content-center'>
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
                            <Container>
                                <Form>
                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
                                        <Row>
                                            <Col xs={9}><Form.Control type="email" placeholder="name@example.com" className='footer-email'/></Col>
                                            <Col xs={3}><Button variant="info" type="submit" className="submit-email">Submit</Button></Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                                <ul className='footer-links-social-media'>
                                    {links}
                                </ul>
                            </Container>    
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row>
                    <Col>
                        <div className='footer-bottom d-flex align-items-center justify-content-center'>
                            <p>Copyright &copy; Anurag Rawal 2024</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}