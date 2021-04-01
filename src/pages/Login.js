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
            <Row className="justify-content-center">
                <Col xs={4} >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        store.dispatch(login(e))
                    }}>
                        <FormGroup label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                            <InputGroup type="email" id="text-email" placeholder="deneme@deneme.com" defaultValue="semihcetin34@gmail.com" />
                        </FormGroup>
                        <FormGroup
                            label="Şifre" labelFor="text-password" labelInfo="(Zorunlu)">
                            <InputGroup type="password" id="text-password" placeholder="*******" defaultValue="1" />
                        </FormGroup>
                        <div className="buttons">
                            <Button className="buttons-btn bp3-button bp3-intent-success bp3-large" type="submit">Giriş</Button>
                            <Link to="/register"><Button className="buttons-btn bp3-button bp3-intent-primary bp3-large" type="button">Kaydol</Button></Link>
                        </div>
                    </form>
                    <div>
                        <Link to="/forgetpassword">Şifremi unuttum</Link>
                    </div>
                </Col>
            </Row >
        </Container>
    )
}

export default Login