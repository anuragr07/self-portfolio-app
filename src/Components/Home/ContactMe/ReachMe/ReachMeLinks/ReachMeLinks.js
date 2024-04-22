import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav } from "react-bootstrap";

export default function ReachMeLinks() {

    // Array for all links
    const linkArray = [
        {
            linkName: 'Linkedin',
            link: "https://www.linkedin.com/in/anuragr07/",
            iconTag: <FontAwesomeIcon icon={faLinkedin} />
        },
        {
            linkName: 'Github',
            link: "https://github.com/anuragr07",
            iconTag: <FontAwesomeIcon icon={faGithub} />
        },
        {
            linkName: 'Instagram',
            link:"https://www.instagram.com/anuragr07/",
            iconTag: <FontAwesomeIcon icon={faInstagram} />
        },
        {
            linkName: 'Email',
            link: "mailto:anuragr07@yahoo.com",
            iconTag: <FontAwesomeIcon icon={faEnvelope} />
        },
        {
            linkName: 'Phone',
            link: "tel:+919915428322",
            iconTag: <FontAwesomeIcon icon={faPhoneAlt} />
        },
    ]

    // generate links to use below
    const links = linkArray.map((linkItem) => {
        return <Nav.Link href={linkItem.link} target="_blank" className="reach-me-at-item">
            {linkItem.iconTag}
            {" "}
            {linkItem.linkName}
        </Nav.Link>
    })
   
    return <Nav className="flex-column">{links}</Nav>
}