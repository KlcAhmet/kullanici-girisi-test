/* Utils */
/* import history from '../utils/history' */
/* Services */
import Post from '../services/Post'
/* Components */
import { Row, Col, Container } from 'react-bootstrap'
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
/* Css */
import '../css/ForgotPassword.css'

const ForgotPassword = () => {
    return (
        <Container>
            <Row className="forgotpass forgotpass--display forgotpass--margin-top">
                <Col xs={12} md={4} >
                    <h3 className="forgotpass-title">Şifre yenileme</h3>
                    <p className="forgotpass-subtitle">Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize ihtiyacımız var.</p>
                </Col>
            </Row >
            <Row className="forgotpass forgotpass--display">
                <Col xs={12} md={4} >
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            Post.forgotPassword(e)
                        }}>
                            <FormGroup labelFor="text-emailforgot">
                                <InputGroup type="email" id="text-emailforgot" placeholder="E-posta Adresi" />
                            </FormGroup>
                            <Button className="buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Şifremi sıfırla</Button>
                        </form>
                    </div>
                </Col>
            </Row >
        </Container>
    )
}

export default ForgotPassword