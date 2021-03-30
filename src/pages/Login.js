import { useEffect } from 'react'
import { useSelector } from "react-redux";
import { Row, Col } from 'react-bootstrap'
import store, { login } from "../store/index"
import { saveState } from '../localStorage'
import history from '../utils/history'
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

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
        <Row className="justify-content-center">
            <Col xs={2} >
                <form onSubmit={(e) => {
                    e.preventDefault();
                    store.dispatch(login(e))
                }}>
                    <FormGroup label="Email" labelFor="text-email" labelInfo="(required)">
                        <InputGroup type="email" id="text-email" placeholder="deneme@serd.com" defaultValue="semihcetin34@gmail.com" />
                    </FormGroup>
                    <FormGroup
                        label="Şifre" labelFor="text-password" labelInfo="(required)">
                        <InputGroup type="password" id="text-password" placeholder="*******" defaultValue="1" />
                    </FormGroup>
                    <div className="buttons">
                        <Button className="buttons-btn bp3-button bp3-intent-success bp3-large" type="submit">Giriş</Button>
                        <Button className="buttons-btn bp3-button bp3-intent-primary bp3-large" type="button">Kaydol</Button>
                    </div>
                </form>
            </Col>
        </Row >
    )
}


export default Login