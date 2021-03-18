/* import axios from "axios" */
import { Form, Button } from 'react-bootstrap'
/* import Access from "./Access" */
/* import Auth from "./Auth" */
/* Redux */
import { useDispatch } from "react-redux"
import { login } from "../store"

const Login = props => {
    const dispatch = useDispatch();

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(login(e))
            console.log(dispatch(login(e)));
            /* props.history.push("/contact") */
        }}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" defaultValue="semihcetin34@gmail.com" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" defaultValue="1" />
            </Form.Group>
            <Button variant="primary" type="submit">Gönder</Button>
        </Form >
    )
}



export default Login