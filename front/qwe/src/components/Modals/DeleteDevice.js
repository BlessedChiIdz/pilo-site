import React, {useContext, useEffect} from 'react';
import {deleteDeivce, deleteType, fetchDevices, fetchTypes} from "../../http/DeviceAPI";
import {observe, toJS} from "mobx";
import {observer} from "mobx-react-lite";
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";

const DeleteType = observer(({show,onHide}) => {
    const {device} = useContext(Context)
    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
    },[])
    useEffect(()=>{
        fetchDevices(device.selectedType.id).then(data=>device.setDevices(data))
    },[device.selectedType])
    const deleteClick = () =>{
        deleteDeivce(device.selectedDevice.id).then(onHide)
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
                    Удалить Девайс
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
                    <Dropdown>
                        <Dropdown.Toggle>
                            {device.selectedDevice.name || "выберете девайс"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.devices.map(qwe=>
                                <Dropdown.Item onClick={()=>device.setSelectedDevice(qwe)}
                                               key={qwe.id}>{qwe.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-danger" onClick={deleteClick}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default DeleteType;