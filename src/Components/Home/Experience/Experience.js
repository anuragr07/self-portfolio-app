import React from "react";
import { Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

// List all the experiences
const experiences = [
    {
        position: "IT Analyst",
        country: "Canada",
        startDate: "Jan 2023",
        endDate: "Present",
        company: "Compugen – FortisBC Contractor",
        technologies: ["ReactJS", "MySQL", "ExpressJS", "VS Code"],
        responsibilities: [
            "Implemented client-side functionalities using ReactJS to enhance user interaction and improve the overall user experience of the FortisBC website.",
            "Implemented SQL queries, stored procedures, and triggers to manipulate and retrieve data from the SQL Server database, improving data processing performance and reliability.",
            "Utilized ExpressJS middleware to handle authentication, data validation, and error handling, ensuring the security and reliability of API endpoints.",
        ],
    },
    {
        position: "Information Systems Co-op",
        country: "Canada",
        startDate: "Sep 2021",
        endDate: "Apr 2022",
        company: "FortisBC",
        technologies: ["ReactJS", "MySQL", "PowerShell", "AD", "SCCM"],
        responsibilities: [
            "Collaborating with the development team to enhance the company’s website by developing and implementing efficient ReactJS code to address any identified gaps, optimize performance, and deliver innovative solutions.",
            "Utilizing PowerShell scripting to streamline complex processes, enhance workflow efficiency, and deliver user-friendly solutions, thereby contributing to improved performance within the development environment.",
            "Contributed to a culture of collaboration, innovation, and continuous improvement within the development team.",
        ],
    },
    {
        position: "J2EE Web Developer",
        country: "India",
        startDate: "Jul 2019",
        endDate: "Oct 2019",
        company: "EME Technologies",
        technologies: ["J2EE", "Java8", "Hibernate", "Spring Boot"],
        responsibilities: [
            "Researched, designed, developed, and maintained business applications meeting the client requirements for functionality, scalability, and performance.",
            "Prepared test cases and executed unit testing to design and develop robust solutions for the applications.",
            "Coordinated with Front-end design teams to create the best possible UI elements that could elevate client-side experience and the overall functionality, and performance of the website.",
        ],
    },
    {
        position: "Software Engineer",
        country: "India",
        startDate: "Jul 2017",
        endDate: "Jul 2019",
        company: "Jagdish Travel Advisor",
        technologies: ["Java8", "JavaFX", "Java Swing"],
        responsibilities: [
            "Collaborated across departments to integrate Windows applications into our systems, enhancing user experience and operational efficiency.",
            "Designed and implemented Windows applications for production, ensuring prompt delivery and meeting company system requirements.",
            "Actively participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives, to ensure timely delivery of features and continuous improvement of the development workflow.",
        ],
    },
];


export default function Experience() {
    return (
        <Container id="experience">
            <h2 className="mt-5 mb-4 text-center">Experience</h2>
            {experiences.map((exp, index) => (
                <Row key={index} className="mb-4">
                    <ExperienceCard experience={exp} />
                </Row>
            ))}
        </Container>
    );
}
