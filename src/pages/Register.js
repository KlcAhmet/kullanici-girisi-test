/* Services */
import Post from '../services/Post'
/* Components */
import { Row, Col, Container } from 'react-bootstrap'
import { Button, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";
/* Css */
import '../css/Register.css'

const Register = () => {
    return (
        <Container>
            <Row className="register register--display">
                <Col className="register-form" xs={11} md={3} >
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        Post.postAccountCreate(e)
                    }}>
                        <FormGroup className="register-form-group" label="Email" labelFor="text-emailadd" labelInfo="(Zorunlu)">
                            <InputGroup type="email" id="text-emailadd" placeholder="deneme@serd.com" palaceholder="deneme@deneme.com" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Şifre" labelFor="text-passwordadd" labelInfo="(Zorunlu)">
                            <InputGroup type="password" id="text-passwordadd" placeholder="*******" defaultValue="123456" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="İsim" labelFor="text-firstName" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-Name" defaultValue="Ahmet Batuhan" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Soyisim" labelFor="text-lastName" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-lastName" defaultValue="Kılıç" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Telefon Numarası" labelFor="text-phone" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-phone" defaultValue="5511075356" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Doğum Günü" labelFor="text-birthDate" labelInfo="(Zorunlu)">
                            <InputGroup type="date" id="text-birthDate" defaultValue="2018-07-22" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Cinsiyet" labelFor="text-gender" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-gender" defaultValue="Erkek" />
                        </FormGroup>
                        <FormGroup className="register-form-group" label="Adres" labelFor="text-address" labelInfo="(Zorunlu)">
                            <TextArea fill={true} id="text-address" defaultValue="Edirne" />
                        </FormGroup>
                        <div className="register-form-btn">
                            <Button className=" bp3-button bp3-intent-primary bp3-large bp3-fill" type="submit">Kaydol</Button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    )
}

export default Register