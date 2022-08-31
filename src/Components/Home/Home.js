import React from "react";
import "./Home.scss";
import Jumbotron from 'react-bootstrap/Jumbotron';
import About from "./About/About";
import Projects from "./Projects/Projects";
import SkillTabs from "./SkillTabs/SkillTabs";

export default function Home(){
    return(
        <div>

            {/* Banner starts here */}
            <Jumbotron fluid>
                <div className="banner-img">
                    <div className="banner-text">
                        <h2>Hi, I am</h2>
                        <h1>Anurag Rawal</h1>
                        <About></About>
                    </div>
                </div>
            </Jumbotron>
            {/* Banner ends here */}

            <Projects></Projects>
            {/* <Skills></Skills> */}
            <SkillTabs></SkillTabs>
        </div>
    )
}