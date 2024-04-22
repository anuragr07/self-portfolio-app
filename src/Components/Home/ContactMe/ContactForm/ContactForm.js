import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import HeadingLevel3 from "../../../Heading/HeadingLevel3/HeadingLevel3";

export default function ContactForm() {

    // State of form data defined
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        message: "",
    });

    // Handles the change in the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handles submit button
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add whatever you want to do with the code

        console.log(formData);
    };

    return (
        <Form onSubmit={handleSubmit} className="contact-form">
            <HeadingLevel3 name="Contact form"></HeadingLevel3>
            <Row>
                <Col lg={6}>
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
                <Col lg={6}>
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
    )
}