/* import axios from "axios" */
import { Form, Button } from 'react-bootstrap'
/* import Access from "./Access" */
/* import Auth from "./Auth" */
/* Redux */
import store from "../store/index"
import { login } from "../store"
/* localStorage */
import { saveState } from '../localStorage'

const Login = props => {
    function loginRun() {
        if (store.getState().User.IsSuccess) {
            saveState({
                User: store.getState().User
            })
            props.history.push("/contact")
            return
        }
        else if (store.getState().User.IsSuccess === false) {
            alert(store.getState().User.Result)
            return
        }
        else {
            setTimeout(function () {
                loginRun()
            }, 500);
        }
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            store.dispatch(login(e))
            loginRun()
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