import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
/* Components */
import { Col } from 'react-bootstrap'
import { Button, Navbar, Alignment } from "@blueprintjs/core";
/* Css */
import '../css/Navigation.css'
/* Utils */
import EventBus from "../utils/Eventbus/EventBus"

const Navigation = (() => {
    const [navLinks, setNavLinks] = useState([])
    const [name, setName] = useState("")


    useEffect(() => {
        const link = [
            {
                title: "Home",
                link: "/"
            },
            {
                title: "Login",
                link: "/login"
            }, {
                title: "Contact us",
                link: "/contact"
            }, {
                title: "Write us",
                link: "/write"
            }]
        const resultNav = []
        link.forEach(({ title, link }, i) => {
            resultNav.push(<Button className="navBar-group-btn bp3-button bp3-minimal" key={i}><NavLink exact to={link}>{title}</NavLink></Button>)
        });
        setNavLinks(resultNav)
        EventBus.addListener("login", ({ type, message }) => {
            if (type === "loginSuccess") setName(message)
        })

    }, [])

    return (
        <Col xs={12} className="navBar">
            <Navbar className="navBar-frame bp3-dark">
                <Navbar.Group className="navBar-group" align={Alignment.RIGHT}>
                    {navLinks}
                    <Button className="navBar-group-btn-cog bp3-button bp3-minimal bp3-icon-user">{name}</Button>
                </Navbar.Group>
            </Navbar>
        </Col>
    )
})

export default Navigation