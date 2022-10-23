import React, {useState} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import {login, registration} from "../http/userAPI";
import {SHOP_ROUTE} from "../utils/consts";
import Count from "./Modals/Count";
const PodDeviceItem = ({device}) => {
    const [MenuVisible, setMenuVisible] = useState(false)
    const click = async () =>{
        try {

        } catch (e){

        }
    }


    return (
            <Col sm={12}>
                <Row className="mt-3 border-bottom border-2 border-dark position-relative">
                <Col sm={6}>
                    <div>
                        {device.name}
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        {device.price}P
                    </div>
                </Col>
                    <Col sm={3} className="text-center">
                        <Button variant={"outline-dark"} className="mb-2"  onClick={()=>setMenuVisible(true)}>Добавить в корзину</Button>
                    </Col>
                    <Count show={MenuVisible} onHide={()=>setMenuVisible(false)} id={device.id}/>
                </Row>
            </Col>
    );
};

export default PodDeviceItem;