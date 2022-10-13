import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import PodDeviceItem from "./PodDeviceItem";
import {Row} from "react-bootstrap";
const PodDeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row>
            {device.DeviceList.map(device=>
                <PodDeviceItem key = {device.id} device={device}/>
            )}
        </Row>
    );
});

export default PodDeviceList;