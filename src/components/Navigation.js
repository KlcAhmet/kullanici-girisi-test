import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
/* Components */
import { Col } from 'react-bootstrap'
import { Button, Navbar, Alignment } from "@blueprintjs/core";

const Navigation = (() => {
    const [navLinks, setNavLinks] = useState([])

    useEffect(() => {
        const link = [
            {
                title: "Home",
                link: "/"
            },
            {
                title: "login",
                link: "/login"
            }, {
                title: "contactUs",
                link: "/contact"
            }, {
                title: "WriteUs",
                link: "/write"
            }]
        const resultNav = []
        link.forEach(({ title, link }, i) => {
            resultNav.push(<Button className="bp3-button bp3-minimal" key={i}><NavLink exact to={link}>{title}</NavLink></Button>)
        });
        setNavLinks(resultNav)
    }, [])

    return (
        <Col xs={12} /* className="col--margin" */>
            <Navbar className="bp3-dark">
                <Navbar.Group align={Alignment.RIGHT}>
                    {navLinks}
                    <Button className="bp3-button bp3-minimal bp3-icon-cog" />
                </Navbar.Group>
            </Navbar>
        </Col>
    )
})

export default Navigation