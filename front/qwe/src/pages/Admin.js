import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/Modals/CreateType";
import CreateDevice from "../components/Modals/CreateDevice";
import CreateDeviceList from "../components/Modals/CreateDeviceList";
import DeleteType from "../components/Modals/DeleteType";
import DeleteDevice from "../components/Modals/DeleteDevice";
const Admin = () => {
    const [typeVisible,setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [deviceListVisible, setDeviceListVisible] = useState(false)
    const [deleteTypeVisible,setDeleteTypeVisible] = useState(false)
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false)
    const [deleteDeviceListVisible, setDeleteDeviceListVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <div style={{marginTop:"60px"}}></div>
            <Button onClick={()=>setTypeVisible(true)} variant={"outline-dark"} className="mt-2">Добавить тип</Button>
            <Button onClick={()=>setDeviceVisible(true)} variant={"outline-dark"} className="mt-2">Добавить устройство</Button>
            <Button onClick={()=>setDeviceListVisible(true)} variant={"outline-dark"} className="mt-2">Добавить подустройство</Button>
            <Button onClick={()=>setDeleteTypeVisible(true)} variant={"outline-dark"} className="mt-2">Удалить тип</Button>
            <Button onClick={()=>setDeleteDeviceVisible(true)} variant={"outline-dark"} className="mt-2">Удалить устройство</Button>
            <Button onClick={()=>setDeleteDeviceListVisible(true)} variant={"outline-dark"} className="mt-2">Удалить подустройство</Button>
            <CreateType show={typeVisible} onHide={()=>setTypeVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={()=>setDeviceVisible(false)}/>
            <CreateDeviceList show={deviceListVisible} onHide={()=>setDeviceListVisible(false)}/>
            <DeleteType show={deleteTypeVisible} onHide={()=>setDeleteTypeVisible(false)}/>
            <DeleteDevice show={deleteDeviceVisible} onHide={()=>setDeleteDeviceVisible(false)}/>
        </Container>
    );
};

export default Admin;