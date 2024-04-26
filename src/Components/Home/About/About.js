import React from "react";
import { Container } from "react-bootstrap";
import pdf from './Resume.pdf'
import './About.scss'

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
                <p>Experienced Software Engineer professional with 2+ years of proven experience in the industry working in different sectors as Service Based and Sales focussed companies, along with PG Diploma Graduate in Computer and Information Systems.</p>
                <a href={pdf} download="Resume_Anurag_Rawal.pdf" className="about-download-button">My Resume</a>
            </div>
        </Container>
        // About me ends here
    );
}