import React from "react";
import { Col } from "react-bootstrap";
import "./Skill.scss";

export default function Skill(){
    return(
        <>
            <Col md="auto" className="skill-style">HTML</Col>
            <Col md="auto" className="skill-style">CSS</Col>
            <Col md="auto" className="skill-style">Node JS</Col>
            <Col md="auto" className="skill-style">React JS</Col>
            <Col md="auto" className="skill-style">Spring Boot</Col>
        </>
    );
}