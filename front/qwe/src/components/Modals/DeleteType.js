import React, {useContext, useEffect} from 'react';
import {deleteType, fetchTypes} from "../../http/DeviceAPI";
import {observe, toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const DeleteType = observer(({show,onHide}) => {
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
    },[])
    const deleteTypeClick =() =>{
        deleteType(device.selectedType.id).then(onHide)
    }
    console.log(toJS(device.selectedType.id))
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>
                            {device.selectedType.name || "выберете тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item onClick={()=>device.setSelectedType(type)}
                                               key={type.id}>{type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-danger" onClick={deleteTypeClick}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;