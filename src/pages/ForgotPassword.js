/* Utils */
/* import history from '../utils/history' */
/* Services */
import Post from '../services/Post'
/* Components */
import { Row, Col, Container } from 'react-bootstrap'
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

const ForgotPassword = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={4} >
                    <div className="forgot">
                        <h3 className="forgot-title">Şifre yenileme</h3>
                        <p className="forgot-subtitle">Şifre yenileme bağlantısını gönderebilmemiz için e-posta adresinize ihtiyacımız var.</p>
                    </div>
                </Col>
            </Row >
            <Row className="justify-content-center">
                <Col xs={4} >
                    <div>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            Post.forgotPassword(e)
                        }}>
                            <FormGroup labelFor="text-emailforgot">
                                <InputGroup type="email" id="text-emailforgot" placeholder="E-posta Adresi" />
                            </FormGroup>
                            <div className="buttons">
                                <Button className="buttons-btn bp3-button bp3-intent-success bp3-large bp3-fill" type="submit">Şifremi sıfırla</Button>
                            </div>
                        </form>
                    </div>
                </Col>
            </Row >
        </Container>
    )
}

export default ForgotPassword