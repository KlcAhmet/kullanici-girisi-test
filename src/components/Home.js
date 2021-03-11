import React, { useState, useEffect } from "react"
import axios from "axios"
import Access from "./Access"

const Home = (() => {
    const [projectList, setProjectList] = useState([])



    useEffect(() => {

        axios.post(`${Access.adress}/Project/ProjectList`)
            .then(function ({ data }) {




            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])
    return (
        <p>asd</p>
    )
})


export default Home