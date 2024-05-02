import React from "react";
import { NavLink } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./MyNavbar.scss"
import Logo from "../Logo/Logo";

export default function Home() {

    const pageLinks = [
        { linkName: "Home", linkVal: "home" },
        { linkName: "My Experience", linkVal: "experience"},
        { linkName: "Skills", linkVal: "skills"},
        { linkName: "Contact Me", linkVal: "contact-me"},
        { linkName: "Projecys", linkVal: "projects"}
    ]

    function getLinks(){
        const links = pageLinks.map((link, key) => {
            if (link.linkVal === "home") {
                return (
                    <NavLink exact activeClassName="nav-link active" className="nav-link my-nav-link" to="/" key={key}><h5>{link.linkName}</h5></NavLink>
                )
            }
            else {
                return (
                    <HashLink exact activeClassName="nav-link active" className="nav-link" to={"#" + link.linkVal} key={key}><h5>{link.linkName}</h5></HashLink>
                )
            }

            // else {
            //     return (
            //         <NavLink exact activeClassName="nav-link active" className="nav-link" to={"/" + link.linkVal} key={key}><h5>{link.linkName}</h5></NavLink>
            //     )
            // }
        });
        return links;
    }

    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-0 nav-main">
            <Navbar.Brand>
            <Nav className="d-flex alig-items-center justify-content-center">
            <NavLink exact className="nav-link active nav-brand" to="/">
                <Logo></Logo>
            </NavLink>
            </Nav>
            </Navbar.Brand>
            <Navbar.Toggle className="nav-collapse-btn" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-center" style={{width: "100%", paddingLeft: "100px"}}>

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