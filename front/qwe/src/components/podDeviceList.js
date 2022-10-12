import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import podDeviceItem from "./podDeviceItem";
const PodDeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <div>
            {device.DeviceList.map(device=>
                <podDeviceItem key = {device.id} device={device}/>
            )}
        </div>
    );
});

export default PodDeviceList;