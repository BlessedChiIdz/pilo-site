import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {addBasketDevice, CheckBasketId, fetchTypes} from "../../http/DeviceAPI";
import {Context} from "../../index";
import data from "bootstrap/js/src/dom/data";

const Count = ({show, onHide, id}) => {
    const [value, setValue] = useState(2)
    
    const click = () => {

        if (value==0){
            onHide()
        }
        else{
        addBasketDevice({Count:value,basketId:1,deviceListId:id},).then(data=>onHide())
        }
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
                    Количество
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество товара"
                        type="number"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={click}>Купить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Count;