import { Form, Button } from 'react-bootstrap'

function UserLoggin() {
    return (
        <Form /* onSubmit={onSubmit} */>
            <Form.Group controlId="formBasicFullName">
                <Form.Label>FullName</Form.Label>
                <Form.Control type="text" placeholder="FullName" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text" placeholder="Message" />
            </Form.Group>

            <Button variant="primary" type="submit">Gönder</Button>
        </Form>
    )
}

export default UserLoggin