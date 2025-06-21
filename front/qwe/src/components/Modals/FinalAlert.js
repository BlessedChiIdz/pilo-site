import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import "../../styles/aboutComp.css"
const FinalAlert = ({showFinal,onHideFinal}) => {
    return (
        <div className="finallMasage">
            <Modal
                show={showFinal}
                onHide={onHideFinal}
                size="lg"
                centered
            >
                <Modal.Header closeButton onClick={onHideFinal}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Мы получили ваш заказ!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Button variant="outline-danger" onClick={onHideFinal}>Закрыть</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FinalAlert;