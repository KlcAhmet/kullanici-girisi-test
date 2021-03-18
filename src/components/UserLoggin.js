/* import axios from "axios" */
/* import Access from "./Access" */
/* import Auth from "./Auth" */
import { Form, Button } from 'react-bootstrap'
const UserLoggin = event => {

    const onSubmit = event => {
        event.preventDefault();
        /*         var formdata = new FormData()
                formdata.append('FullName', event.target[0].value)
                formdata.append('Email', event.target[1].value)
                formdata.append('Subject', event.target[2].value)
                formdata.append('Message', event.target[3].value)
                axios({
                    method: "post",
                    url: `${Access}/ContactUs/List`,
                    headers: {
                        "Content-Type": "multipart/form-data",
                        authorization: `Bearer ${Auth.getToken()}`
                    },
                })
                    .then(function (data) {
                        //handle success
                        console.dir(data);
        
        
                    })
                    .catch(function (error) {
                        console.log("Hata")
                        console.log(error)
                    }) */
    }
    return (
        <Form onSubmit={onSubmit}>
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