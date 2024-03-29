import React from "react";
import { Container, Row } from "react-bootstrap";
import Skill from "./Skill/Skill";
import "./Skills.scss"
// import SkillTabs from "./SkillTabs/SkillTabs";

// TODO: Get the skills array here and pass it as props or process it as props and make skills display

export default function Skills(){

    const skills = ['HTML5', 'CSS3', 'Java11', 'JavaScript', 'Android Development', 'MERN Stack', 'ReactJS', 'ExpressJS', 'Spring Boot', 'MongoDB', 'MySQL'];
    
    // To get the skill components in an array
    function getSkills(){
        const skillComponents = skills.map((skill, key) => {
            return <Skill name={skill} key={key}></Skill>
        });
        return skillComponents;
    }

    return(
        <>
            {/* Heading code */}
            {/* <Container>
                <HeadingMain name='Skills'></HeadingMain>
                <SkillTabs></SkillTabs>
            </Container>      */}

            {/* Section Code */}
            <div className="skills-wrapper">
                <Container>
                    
                    {/* Tabs */}                    
                    <Row xs={3} sm={4} md={6} lg={8} className="justify-content-center">
                        {getSkills()}
                    </Row>
                </Container>
            </div>
        </>
    )
}