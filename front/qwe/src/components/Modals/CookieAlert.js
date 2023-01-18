import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CookieAlert = ({show, onHide}) => {
    return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cookie
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                    </Form>
                </Modal.Body>
            </Modal>
    );
};

export default CookieAlert;