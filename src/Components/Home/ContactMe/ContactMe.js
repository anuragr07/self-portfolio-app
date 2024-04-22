import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HeadingLevel3 from "../../Heading/HeadingLevel3/HeadingLevel3";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";
import "./ContactMe.scss";
import ReachMe from "./ReachMe/ReachMe";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactMe() {

    return (
        <Container>
            <HeadingMain name="Contact Me"></HeadingMain>
            <Row>
                <Col md={5} className="contact-form-col">
                    <ContactForm></ContactForm>
                </Col>
                <Col md={7} className="reach-me-at">
                    <HeadingLevel3 name="Reach me at"></HeadingLevel3>
                    <ReachMe></ReachMe>
                </Col>
            </Row>
        </Container>
    );
}
