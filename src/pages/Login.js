import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Form, Button } from 'react-bootstrap'
import store, { login } from "../store/index"
import { saveState } from '../localStorage'
import history from '../utils/history'

const Login = props => {
    const Token = useSelector(state => state.Token);
    useEffect(() => {
        if (store.getState().Token) {
            saveState({
                User: store.getState().User
            })
            saveState({
                Token: store.getState().Token
            })
            history.push("/contact")
        }
    }, [Token])

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            store.dispatch(login(e))
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