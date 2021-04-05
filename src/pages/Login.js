import { useEffect } from 'react'
import { saveState } from '../localStorage'
/* Redux */
import { useSelector } from "react-redux";
import store, { login } from "../store/index"
/* Utils */
import history from '../utils/history'
/* Components */
import { Row, Col, Container } from 'react-bootstrap'
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
/* Css */
import '../css/Login.css'

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
        <Container>
            <Row className="login login--display">
                <Col className="login-form" xs={11} sm={6} md={6} lg={4} xl={4} >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        store.dispatch(login(e))
                    }}>
                        <FormGroup className="login-form-group" label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                            <InputGroup type="email" id="text-email" placeholder="deneme@deneme.com" defaultValue="semihcetin34@gmail.com" />
                        </FormGroup>
                        <FormGroup className="login-form-group" label="Şifre" labelFor="text-password" labelInfo="(Zorunlu)">
                            <InputGroup type="password" id="text-password" placeholder="*******" defaultValue="1" />
                        </FormGroup>
                        <div className="login-form-btn">
                            <Button className="login-form-btn-giris buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Giriş</Button>
                            <Link to="/register"><Button className="login-form-btn-kaydol buttons-btn bp3-button bp3-intent-primary bp3-large bp3-fill" type="button">Kaydol</Button></Link>
                        </div>
                    </form>
                    <Link className="login-forgotpassword" to="/forgotpassword">Şifremi unuttum</Link>
                </Col>
            </Row >
        </Container>
    )
}

export default Login