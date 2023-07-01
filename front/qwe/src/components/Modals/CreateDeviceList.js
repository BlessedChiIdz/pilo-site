import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {CreateDeviceList, fetchDevices, fetchDeviceList, fetchOneDevices, fetchTypes} from "../../http/DeviceAPI";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router-dom";

const createDeviceList = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
    },[])
    useEffect(()=>{
        fetchDevices(device.selectedType.id).then(data=>device.setDevices(data))
    },[device.selectedType])

    const addDeviceList=()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('deviceId', device.selectedDevice.id)
        CreateDeviceList(formData).then(data=>onHide())
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
                    Добавить поддевайс
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
                    <Form.Control
                        value={name}
                        onChange={e=>setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e=>setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDeviceList}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default createDeviceList;