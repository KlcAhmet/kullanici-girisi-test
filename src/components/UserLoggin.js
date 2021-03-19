/* import axios from "axios" */
/* import Access from "./Access" */
/* import Auth from "./Auth" */
import { Form, Button } from 'react-bootstrap'
/* Redux */
import store from "../store/index"
import { getContactList } from "../store"

const UserLoggin = event => {

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            store.dispatch(getContactList(e))
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
    )
}

export default UserLoggin