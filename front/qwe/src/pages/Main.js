import React from 'react';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {checkCookie, CreateDeviceList, MainApi} from "../http/DeviceAPI";
import axios from "axios";
const Main = () => {
    let qwe = document.cookie;
    let zxc = qwe.slice("=")
    const  navigate = useNavigate()
    const click=()=>{
        navigate('/shop')
        checkCookie(zxc[1]).then(console.log(document.cookie))
    }
    return (
        <div>
            <Button onClick={click}></Button>
        </div>
    );
};

export default Main;