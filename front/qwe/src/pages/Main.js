import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {CreateDeviceList} from "../http/DeviceAPI";
import axios from "axios";
const Main = () => {
    const  navigate = useNavigate()
    const click=()=>{
        navigate('/shop')

    }
    return (
        <div>
            <Button onClick={click}></Button>
        </div>
    );
};

export default Main;