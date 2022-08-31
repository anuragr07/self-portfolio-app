import React from "react";
import { Container } from "react-bootstrap";

export default function About(){
    return(
        // About me starts here
        <Container>

            {/* Heading */}
            {/* <HeadingMain name='About Me'></HeadingMain> */}

            {/* Content */}
            <div className="para-1">
                
                {/* TODO: Add Social media links here */}
                {/* TODO: Add contact me links here - Email, Resume */}
                <p>2nd-year student in Post Baccalaureate Diploma in Computing and Information Systems acquiring knowledge in Modern web development frameworks and libraries including MERN stack, Spring Boot. Aiding users for the technical issues and developing quality solutions for the company while working in Information Systems team.</p>
            </div>
        </Container>
        // About me ends here
    );
}