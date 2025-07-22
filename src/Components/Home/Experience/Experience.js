import React from "react";
import { Container, Row } from "react-bootstrap";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import HeadingMain from "../../Heading/HeadingMain/HeadingMain";

// List all the experiences
const experiences = [
    {
        position: "IT Analyst",
        country: "Canada",
        startDate: "Jan 2023",
        endDate: "Oct 2024",
        company: "Compugen – FortisBC Contractor",
        technologies: ["AD", "SCCM", "PowerShell", "Azure", "MySQL", "VS Code"],
        responsibilities: [
            "Administered Active Directory and SCCM to manage deployment packaging and deliver L2 support by resolving escalated incidents and assisting helpdesk staff for issue resolution.",
            "Maintained Exchange Server infrastructure, managing user mailboxes, shared mailboxes, and distribution lists to ensure streamlined communication across teams.",
            "Authored and maintained technical documentation, workflows, and training materials to support long-term operational sustainability and knowledge sharing.",
            "Developed PowerShell scripts to automate manual documentation processes, reducing task completion time and increasing operational efficiency.",
            "Assisted IS Team system administrators by developing PowerShell scripts to automate the addition of distribution lists and Teams meeting room permissions.",
            "Collaborated with cross-functional teams to support process optimization and automation initiatives, resulting in reduced manual workload and enhanced efficiency.",
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
            "Implemented client-side functionalities using ReactJS to enhance user interaction and improve the overall user experience of the FortisBC website.",
            "Created and executed test cases and unit tests to ensure robust application functionality and adherence to quality standards.",
            "Managed software license allocation for the development team, ensuring members had the tools required to fulfill their roles effectively.",
            "Developed PowerShell scripts to streamline workflows and automate complex tasks, improving performance and developer productivity.",
            "Fostered a collaborative and innovative environment within the Information Systems team to support continuous improvement and knowledge sharing.",
        ],
    },
    {
        position: "Java Developer",
        country: "India",
        startDate: "Jul 2019",
        endDate: "Oct 2019",
        company: "EME Technologies",
        technologies: ["J2EE", "Java8", "Hibernate", "Spring Boot"],
        responsibilities: [
            "Designed and developed responsive web pages using JSP (JavaServer Pages) to deliver user-friendly interfaces tailored to client specifications.",
            "Implemented backend services using Hibernate ORM to manage persistent data interactions with MySQL databases efficiently.",
            "Integrated front-end JSP with Hibernate-powered back-end services to enable seamless communication between the UI and database layers.",
            "Designed relational database schemas and optimized SQL queries in MySQL to support high-volume data operations and maintain data integrity.",
        ],

    },
    // {
    //     position: "Software Engineer",
    //     country: "India",
    //     startDate: "Jul 2017",
    //     endDate: "Jul 2019",
    //     company: "Jagdish Travel Advisor",
    //     technologies: ["Java8", "JavaFX", "Java Swing"],
    //     responsibilities: [
    //         "Collaborated across departments to integrate Windows applications into our systems, enhancing user experience and operational efficiency.",
    //         "Designed and implemented Windows applications for production, ensuring prompt delivery and meeting company system requirements.",
    //         "Actively participated in Agile development processes, including sprint planning, daily stand-ups, and retrospectives, to ensure timely delivery of features and continuous improvement of the development workflow.",
    //     ],
    // },
];


export default function Experience() {
    return (
        <Container id="experience">
            <HeadingMain name="Experience"></HeadingMain>
            {experiences.map((exp, index) => (
                <Row key={index} className="mb-4">
                    <ExperienceCard experience={exp} />
                </Row>
            ))}
        </Container>
    );
}
