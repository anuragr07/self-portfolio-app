import React from "react";
import "./Home.scss";
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Container } from "react-bootstrap";

export default function Home(){
    return(
        <div>

            {/* Banner starts here */}
            <Jumbotron fluid>
                <div className="banner-img">
                    <div className="banner-text">
                        <h2>Hi, I am</h2>
                        <h1>Anurag Rawal</h1>
                    </div>
                </div>
            </Jumbotron>
            {/* Banner ends here */}

            {/* About me starts here */}
            <Container>
                <div className="heading-1">
                    <h1>About me</h1>
                </div>
                <div className="para-1">
                    <p>2nd-year student in Post Baccalaureate Diploma in Computing and Information Systems acquiring knowledge in Modern web development frameworks and libraries including MERN stack, Spring Boot. Aiding users for the technical issues and developing quality solutions for the company while working in Information Systems team.</p>
                </div>
            </Container>
            {/* About me ends here */}


        </div>
    )
}