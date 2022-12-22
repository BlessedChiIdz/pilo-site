import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import DeviceItem from "./DeviceItem";
import {Container, Row} from "react-bootstrap";

const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div style={{display:"inline-block", textAlign:"center"}}>
            {device.devices.map(device=>
                <DeviceItem key={device.id} device={device}/>
            )}
        </div>
    );
});

export default DeviceList;