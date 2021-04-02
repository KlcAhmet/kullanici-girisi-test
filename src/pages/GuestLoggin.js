/* Components */
import { Row, Col, Container } from 'react-bootstrap'
/* Css */
import '../css/GuestLoggin.css'

const GuestLoggin = e => {
    return (
        <Container>
            <Row className="guest guest--display">
                <Col xs={11} >
                    <p className="guest-title">İlk önce giriş yapın.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default GuestLoggin