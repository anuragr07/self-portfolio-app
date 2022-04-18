import React from 'react';
import { Card, Col } from 'react-bootstrap';

export default function ProjectCard(){
    return(
        <Col lg className="col-spacing">
            <Card>
                <Card.Img variant="top" src="https://dummyimage.com/600x400/000/fff" />
                <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk
                    of the card's content.
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}