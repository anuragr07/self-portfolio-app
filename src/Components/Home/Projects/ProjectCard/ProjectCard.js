import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function ProjectCard(props){
    return(
        // Create a description for the projects and make the projects visually appealing
        // - Add headings
        // - Add pictures
        // - Add links to the projects
        <Col lg className="col-spacing">
            <Card>
                <Card.Img variant="top" src="https://dummyimage.com/1600x900/000/fff" />
                <Card.Body>
                <Card.Text>
                    {props.name} Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}