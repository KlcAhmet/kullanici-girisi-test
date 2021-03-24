/* import axios from "axios" */
/* import Access from "./Access" */
/* import Auth from "./Auth" */
import { useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap'
/* Redux */
import store from "../store/index"
import { getContactList } from "../store"
import { saveState } from '../localStorage'

const UserLoggin = props => {
    const [tableHead, setTableHead] = useState([])
    const [list, setList] = useState([])

    function contactRun() {
        if (localStorage.getItem('Token') && store.getState().ContactList.length) {
            saveState({
                ContactList: store.getState().ContactList
            })
            const tableHeader = []
            const tableBody = []
            Object.keys(store.getState().ContactList[0]).forEach((element, i) => tableHeader.push(<th key={i}>{element}</th>))
            setTableHead(tableHeader)

            store.getState().ContactList.forEach((element, i) => {
                const td = []
                Object.values(element).forEach((e, i) => td.push(<td key={i}>{e}</td>))
                tableBody.push(<tr key={i}>{td}</tr>)
            })
            setList(tableBody)
            return
        }
        else {
            setTimeout(function () {
                contactRun()
            }, 500);
        }
    }

    return (
        <>
            <Form onSubmit={(e) => {
                e.preventDefault();
                store.dispatch(getContactList(e))
                contactRun()
            }}>
                <Form.Group controlId="formBasicFullName">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control type="text" placeholder="FullName" defaultValue="Test Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue="testd@mail.com" />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject" defaultValue="Test Subject" />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" placeholder="Message" defaultValue="Test Message" />
                </Form.Group>

                <Button variant="primary" type="submit">Gönder</Button>
            </Form>
            <div>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>
                            {tableHead}
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default UserLoggin