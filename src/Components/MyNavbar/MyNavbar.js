import React from "react";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "./style.scss"

export default function Home() {

    const pageLinks = [
        { linkName: "Home", linkVal: "home" },
        { linkName: "My Work", linkVal: "work"},
        { linkName: "Skills", linkVal: "skills"},
        { linkName: "Contact Me", linkVal: "contact"},
        { linkName: "My Resume", linkVal: "resume"}
    ]

    function getLinks(){
        const links = pageLinks.map((link, key) => {
            if (link.linkVal === "home") {
                return (
                    <NavLink exact activeClassName="nav-link active" className="nav-link" to="/" key={key}><h5>{link.linkName}</h5></NavLink>
                )
            }
            else {
                return (
                    <NavLink exact activeClassName="nav-link active" className="nav-link" to={"/" + link.linkVal} key={key}><h5>{link.linkName}</h5></NavLink>
                )
            }
        });
        return links;
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light" className="p-0 nav-height">
            <Navbar.Brand>
            <Nav>
            <NavLink exact className="nav-link active" to="/">
                <h1 className="logo">
                    <FontAwesomeIcon icon={faCode} />
                    ANURAGR07
                </h1>    
            </NavLink>
            </Nav>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end" style={{ width: "100%", marginRight: "100px" }}>

                    {getLinks()}
                    {/* {getLoginLogoutLink()} */}
                </Nav>
            </Navbar.Collapse>
            {/* <Form inline>
                <Nav>
                    {getUserLink()}
                </Nav>
            </Form> */}
        </Navbar>
    )
}