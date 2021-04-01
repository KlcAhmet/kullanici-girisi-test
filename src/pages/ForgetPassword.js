/* Utils */
import history from '../utils/history'
/* Services */
import Post from '../services/Post'
/* Components */
/* import { Row, Col, Container, Accordion, Card } from 'react-bootstrap' */
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";

const ForgetPassword = () => {
    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                /*  Post.forgotPassword(e) */
            }}>
                <FormGroup label="Email Adresi" labelFor="text-emailforgot">
                    <InputGroup type="email" id="text-emailforgot" placeholder="deneme@deneme.com" />
                </FormGroup>
                <div className="buttons">
                    <Button className="buttons-btn bp3-button bp3-intent-success bp3-large" type="submit">Şifremi sıfırla</Button>
                </div>
            </form>
        </div>
    )
}

export default ForgetPassword