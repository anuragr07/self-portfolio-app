import React, { useState } from "react";
import { Col } from "react-bootstrap";
import "./Skill.scss";

export default function Skill(props){

    const[skillWidth, setSkillWidth] = useState("auto");

    function skillFocus(){
        setSkillWidth("8");
    }

    function skillUnfocus(){
        setSkillWidth("auto");
    }

    return(
        <>
            <Col md={skillWidth} className="skill-style" key={props.key} onClick={skillFocus} onBlur={skillUnfocus}>{props.name}</Col>
        </>
    );
}