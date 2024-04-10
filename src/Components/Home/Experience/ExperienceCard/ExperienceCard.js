import React from 'react';
import { Card, Col, Row } from "react-bootstrap";
import "./ExperienceCard.scss"


const ExperienceCard = ({ experience }) => {
    return (
        <Card className="mb-4 border-0 shadow experience-card">
            <Card.Body>
                <Row>
                    <Col sm={4}>
                        <div className="experience-info">
                            <Card.Title>{experience.position}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {experience.company} - {experience.country}
                            </Card.Subtitle>
                            <Card.Text>
                                <strong>Duration:</strong> {experience.startDate} -{" "}
                                {experience.endDate}
                                <br />
                                <strong>Technologies:</strong>{" "}
                                {experience.technologies.join(", ")}
                            </Card.Text>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className="responsibilities">
                            <strong>Responsibilities:</strong>
                            <ul>
                                {experience.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default ExperienceCard;
