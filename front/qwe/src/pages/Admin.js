import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/Modals/CreateType";
import CreateDevice from "../components/Modals/CreateDevice";
import CreateDeviceList from "../components/Modals/CreateDeviceList";
const Admin = () => {
    const [typeVisible,setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deviceListVisible, setDeviceListVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button onClick={()=>setTypeVisible(true)} variant={"outline-dark"} className="mt-2">Добавить тип</Button>
            <Button onClick={()=>setDeviceVisible(true)} variant={"outline-dark"} className="mt-2">Добавить устройство</Button>
            <Button onClick={()=>setDeviceListVisible(true)} variant={"outline-dark"} className="mt-2">Добавить подустройство</Button>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
            <CreateDeviceList show={deviceListVisible} onHide={()=>setDeviceListVisible(false)}/>
        </Container>
    );
};

export default Admin;