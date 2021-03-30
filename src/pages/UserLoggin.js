import { useEffect, useState } from 'react'
/* Redux */
import { useSelector } from "react-redux";
import store, { getContactList } from "../store/index"
/* Components */
import { Row, Col } from 'react-bootstrap'
import { Button, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";

const UserLoggin = props => {
    const ContactList = useSelector(state => state.ContactList)
    const [tableHead, setTableHead] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        if (ContactList) {
            const tableHeader = []
            const tableBody = []
            Object.keys(ContactList[0]).forEach((element, i) => tableHeader.push(<th key={i}>{element}</th>))
            setTableHead(tableHeader)

            ContactList.forEach((element, i) => {
                const td = []
                Object.values(element).forEach((e, i) => td.push(<td key={i}>{e}</td>))
                tableBody.push(<tr key={i}>{td}</tr>)
            })
            setList(tableBody)
        }
    }, [ContactList])

    return (
        <div className="userlogin">
            <Row className="justify-content-center" style={{ margin: 0 }}>
                <Col xs={2} >
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        store.dispatch(getContactList(e))
                    }}>
                        <FormGroup label="Full Name" labelFor="text-name" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-name" defaultValue="Test Name" />
                        </FormGroup>
                        <FormGroup
                            label="Email" labelFor="text-email" labelInfo="(Zorunlu)">
                            <InputGroup type="email" id="text-email" defaultValue="test@mail.com" />
                        </FormGroup>
                        <FormGroup
                            label="Subject" labelFor="text-subject" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-subject" defaultValue="Test Subject" />
                        </FormGroup>
                        <FormGroup
                            label="Subject" labelFor="text-subject" labelInfo="(Zorunlu)">
                            <InputGroup type="text" id="text-subject" defaultValue="Test Subject" />
                        </FormGroup>
                        <FormGroup
                            label="Message" labelFor="text-message" labelInfo="(Zorunlu)">
                            <TextArea fill={true} defaultValue="Test Message Test Message Test Message Test Message Test Message" />
                        </FormGroup>
                        <Button className="contactbtn bp3-button bp3-intent-primary bp3-large" type="submit">Gönder</Button>
                    </form>
                </Col>
                <Col>
                    <table className="bp3-html-table bp3-html-table-bordered bp3-html-table-striped bp3-interactive bp3-small">
                        <thead>
                            <tr>
                                {tableHead}
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </div>
    )
}

export default UserLoggin