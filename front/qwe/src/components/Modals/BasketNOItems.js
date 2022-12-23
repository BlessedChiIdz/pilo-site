import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const BasketNoItems = ({show, onHide}) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    В корзине нет товаров
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default BasketNoItems;