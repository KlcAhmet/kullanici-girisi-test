import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

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
            resultNav.push(<NavLink exact to={link} key={i}>{title}</NavLink>)
        });
        setNavLinks(resultNav)
    }, [])

    return (
        <nav className="navlink">
            {navLinks}
        </nav>
    )
})

export default Navigation