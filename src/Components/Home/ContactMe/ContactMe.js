import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import HeadingLevel3 from '../../Heading/HeadingLevel3/HeadingLevel3';
import HeadingMain from '../../Heading/HeadingMain/HeadingMain';
import "./ContactMe.scss";

export default function ContactMe() {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <Container>
            <HeadingMain name="Contact Me"></HeadingMain>
            <Row>
                <Col>
                    <HeadingLevel3 name="Contact form"></HeadingLevel3>
                    
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Row>
                            <Col>
                                <Form.Group controlId="formFirstName">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="fname"
                                        value={formData.fname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formLastName">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lname"
                                        value={formData.lname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group controlId="formEmail">
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Control
                                as="textarea"
                                rows={4}
                                placeholder="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="submit-button">
                            Submit
                        </Button>
                    </Form>

                </Col>
                <Col>
                    <HeadingLevel3 name="Reach me at"></HeadingLevel3>
                </Col>
            </Row>
        </Container>
    )
}