import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Count from "./Modals/Count";
import {Context} from "../index";
import {Delete, fetchOneDeviceList} from "../http/DeviceAPI";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const BasketItems = ({basket}) => {
    const {user} = useContext(Context)
    let [dev,setDev] = useState({})
    useEffect(()=>{
        fetchOneDeviceList(basket.deviceListId).then(data=>user.setItem(data))
    },[])
    if(user.Item[0]===undefined){
        user.Item[0] = {
            name: "John",
        };
    }
     console.log(toJS(basket))
    const click = () =>{
        Delete(basket.id).then(data=>fetchOneDeviceList(basket.deviceListId).then(data=>setDev(data)))
    }
    return (
        <Col sm={12}>
            <Row className="mt-3 border-bottom border-2 border-dark position-relative">
                <Col sm={6}>
                    <div>
                        {basket.Count}
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        {user.Item[0].name}B
                    </div>
                </Col>
                <Col sm={3} className="text-center">
                    <Button onClick={click}>Удалить</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default BasketItems;