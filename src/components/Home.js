import React, { useState, useEffect } from "react"
import axios from "axios"
import Access from "./Access"
import Table from 'react-bootstrap/Table'

const Home = (() => {
    const [tableHead, setTableHead] = useState([])
    const [projectList, setProjectList] = useState([])


    useEffect(() => {

        axios.post(`${Access}/Project/ProjectList`)
            .then(function ({ data }) {
                if (data.IsSuccess !== 1) {
                    const i = []
                    i.push(<p>Listeye ulaşılmıyor</p>)
                    setProjectList(i)
                }
                else {
                    const tableHeader = []
                    const tableBody = []

                    Object.keys(data.Result[0]).forEach((element, i) => tableHeader.push(<th key={i}>{element}</th>))
                    setTableHead(tableHeader)

                    data.Result.forEach((element, i) => {
                        const td = []
                        Object.values(element).forEach((e, i) => td.push(<td key={i}>{e}</td>))
                        tableBody.push(<tr key={i}>{td}</tr>)
                    })
                    setProjectList(tableBody)
                }



            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }, [])
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    {tableHead}
                </tr>
            </thead>
            <tbody>
                {projectList}
            </tbody>
        </Table>

    )
})


export default Home