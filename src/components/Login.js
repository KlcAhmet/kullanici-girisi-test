import axios from "axios"
import { Form, Button } from 'react-bootstrap'
import Access from "./Access"


const Login = props => {


    const onSubmit = event => {
        var formdata = new FormData()
        formdata.append('Email', event.target[0].value)
        formdata.append('Password', event.target[1].value)
        event.preventDefault();

        axios({
            method: "post",
            url: `${Access}/Account/Login`,
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function (data) {
                //handle success
                if (data.data.IsSuccess) {
                    /* setToken(data.data.Result.AccessToken) */
                }
                else {
                    alert("Mail yada şifre yanlış!")
                }

            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">Gönder</Button>
        </Form>
    )
}



export default Login