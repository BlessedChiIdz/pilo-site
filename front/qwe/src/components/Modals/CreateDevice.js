import React, {useContext} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            Выберити тип
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    /><Form.Control
                    className="mt-3"
                    type="file"
                />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;