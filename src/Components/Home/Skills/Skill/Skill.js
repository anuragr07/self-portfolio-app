import React from "react";
import { Col } from "react-bootstrap";
import "./Skill.scss";

export default function Skill(props){

    return <Col md="auto" className="skill-style">{props.name}</Col>
}