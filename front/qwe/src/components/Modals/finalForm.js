import React, {useState} from 'react';
import {createType, sendMail} from "../../http/DeviceAPI";
import {Button, Form, Modal} from "react-bootstrap";

const FinalForm = ({show,onHide}) => {

    const [value, setValue] = useState('')
    const addType = () => {
        sendMail("das").then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Введите телефон
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(e.target.value)}
                        placeholder={"Введите телефон"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};


export default FinalForm;