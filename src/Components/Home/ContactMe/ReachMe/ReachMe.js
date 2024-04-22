import React from "react";
import ReachMeLinks from "./ReachMeLinks/ReachMeLinks";
import { Row, Col } from "react-bootstrap";

export default function ReachMe() {
    return (
        <Row>
            <Col md={6} className="social-media-links"> 
                {/* Social media links component */}
                <ReachMeLinks></ReachMeLinks>
            </Col>
            <Col md={6} className="resume-download">
                {/* Resume download component */}
                
            </Col>
        </Row>
    )
}