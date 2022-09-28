import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchDevices, fetchTypes} from "../../http/DeviceAPI";
import {observer} from "mobx-react-lite";

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
        fetchDevices().then(data=>device.setDevices(data))
    },[])
    const selectFile= e =>{
        setFile(e.target.files[0])
    }
    const addDevice=()=>{
        const formData = new FormData()
        formData.append('name',name)
        formData.append('price',`${price}`)
        formData.append('img',file)
        formData.append('typeId', device.selectedType.id)
        createDevice(formData).then(data=>onHide())
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
                    Добавить тип
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
                    /><Form.Control
                    className="mt-3"
                    type="file"
                    onChange={selectFile}
                />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateDevice;