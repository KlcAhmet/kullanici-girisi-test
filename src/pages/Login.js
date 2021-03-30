import { useEffect } from 'react'
import { saveState } from '../localStorage'
/* Redux */
import { useSelector } from "react-redux";
import store, { login } from "../store/index"
/* Utils */
import history from '../utils/history'
/* Components */
import { Row, Col } from 'react-bootstrap'
import { Button, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";

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
        <Row className="justify-content-center" style={{ margin: 0 }}>
            <Col xs={2} >
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
                        <Button className="buttons-btn bp3-button bp3-intent-primary bp3-large" type="button">Kaydol</Button>
                    </div>
                </form>
            </Col>
            <Col xs={2} >
                <form onSubmit={(e) => {
                    e.preventDefault();
                    store.dispatch(login(e))
                }}>
                    <FormGroup label="Email" labelFor="text-emailadd" labelInfo="(Zorunlu)">
                        <InputGroup type="email" id="text-emailadd" placeholder="deneme@serd.com" palaceholder="deneme@deneme.com" />
                    </FormGroup>
                    <FormGroup
                        label="Şifre" labelFor="text-passwordadd" labelInfo="(Zorunlu)">
                        <InputGroup type="password" id="text-passwordadd" placeholder="*******" />
                    </FormGroup>
                    <FormGroup
                        label="İsim" labelFor="text-firstName" labelInfo="(Zorunlu)">
                        <InputGroup type="text" id="text-Name" />
                    </FormGroup>
                    <FormGroup
                        label="Soyisim" labelFor="text-lastName" labelInfo="(Zorunlu)">
                        <InputGroup type="text" id="text-lastName" />
                    </FormGroup>
                    <FormGroup
                        label="Telefon Numarası" labelFor="text-phone" labelInfo="(Zorunlu)">
                        <InputGroup type="text" id="text-phone" />
                    </FormGroup>
                    <FormGroup
                        label="Doğum Günü" labelFor="text-birthDate" labelInfo="(Zorunlu)">
                        <InputGroup type="date" id="text-birthDate" />
                    </FormGroup>
                    <FormGroup
                        label="Cinsiyet" labelFor="text-gender" labelInfo="(Zorunlu)">
                        <InputGroup type="text" id="text-gender" />
                    </FormGroup>
                    <FormGroup
                        label="Adres" labelFor="text-address" labelInfo="(Zorunlu)">
                        <TextArea fill={true} />
                    </FormGroup>
                    <div className="buttons">
                        <Button className="buttons-btn bp3-button bp3-intent-primary bp3-large" type="button">Kaydol</Button>
                    </div>
                </form>
            </Col>
        </Row >
    )
}

export default Login