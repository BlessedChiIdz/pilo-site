import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Count from "./Modals/Count";
import {Context} from "../index";
import {fetchOneDeviceList, getBasketDevices} from "../http/DeviceAPI";
import {toJS} from "mobx";

const BasketItems = ({basket}) => {
    //const {device} = useContext(Context)
    let [Item,setItem] = useState({})
    useEffect(()=>{
            fetchOneDeviceList(basket.deviceListId).then(data=>setItem(data))
        },[])
    //console.log(basket.deviceListId)
    //console.log(toJS(device.BasketPodDevices))
    //console.log(toJS(basket))
    console.log(Item)
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
                        {Item[0].name}B
                    </div>
                </Col>
                <Col sm={3} className="text-center">
                    <Button >Удалить</Button>
                </Col>
            </Row>
        </Col>
    );
};

export default BasketItems;