import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const  navigate = useNavigate()
    console.log(navigate)
    return (
        <div style={{display:"inline-block"}} onClick={()=>navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width: 150, cursor: 'pointer' }} border={"0"} className="justify-content-center">
                <Image width={140} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className="mt-1 d-flex justify-content-between align-items-center">
                    <div>{device.name}</div>
                </div>
            </Card>
        </div>
    );
};

export default DeviceItem;