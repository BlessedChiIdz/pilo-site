import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Count from "./Modals/Count";
import {Context} from "../index";
import {Delete, fetchOneDeviceList} from "../http/DeviceAPI";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";

const BasketItems = ({basket}, {dev}) => {
    const {user} = useContext(Context)
    let [price,setPrice] = useState(0)
    useEffect(()=>{
        setPrice(basket[0].Count*basket[0].price)
    },)
    // if(dev[0]===undefined){
    //     dev[0] = {
    //         name: "John",
    //     };
    // }

    const click = () =>{
        Delete(basket[0].idForDelete).then(data=>user.setItem(user.Item+1))
    }
    // console.log(toJS(basket[0]))
    // console.log(dev)
    return (
        <Col sm={12} className="">
            <Container className="align-items: center">
                <Row className="mt-3 border-bottom border-2 border-dark position-relative ">
                    <Col sm={3}>
                        <div>
                            {basket[0].name}
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div>
                            {price}Руб.
                        </div>
                    </Col>
                    <Col sm={3}>
                        <div>
                            Количество:{basket[0].Count}
                        </div>
                    </Col>
                    <Col sm={3} className="text-center">
                        <Button onClick={click}>Удалить</Button>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default BasketItems;