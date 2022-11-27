import React, {useContext, useEffect, useState} from 'react';
import DeviceList from "../components/DeviceList";
import PodDeviceList from "../components/PodDeviceList";
import {Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {
    fetchDeviceList,
    fetchOneDeviceList,
    fetchOneDevices,
    getBasketDevices,
    getBasketId,
    Plus
} from "../http/DeviceAPI";
import {observable, set, toJS} from "mobx";
import BasketItemsList from "../components/BasketItemsList";
import {observer} from "mobx-react-lite";
const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    let [dev,setDev] = useState(0)
    let [price,setPrice] = useState(0)
    let cookie_req = document.cookie.split("=")
    let cookies = cookie_req[1]
    let summ=0
    useEffect( () =>{
        getBasketDevices(cookies).then(data=>basket.setBasketsForBasket(data))
    },[user.Item])
    basket.BasketsForBasket.map(basket=>{
        summ+=basket[0].finalPrice
    })
    console.log(summ)
    // useEffect( () =>{
    //     basket.BasketsForBasket.map(basket=>console.log(toJS(basket[0].finalPrice)))
    // },[user.Item])
    //basket.BasketsForBasket.map(basket=>console.log(toJS(basket[0])))

    // useEffect( () =>{
    //     getBasketDevices(cookies).then(data=>{
    //         basket.setBasketsForBasket(data)
    //         basket.BasketsForBasket.map((basket)=>fetchOneDeviceList(basket.deviceListId).then(data=>setTheArray(prevState => [prevState,{currentOrNewKey:data}])))
    //     })
    // },[])
    //console.log(toJS(basket.BasketsForBasket))
    // console.log(theArray)

    return (
        <Container>
            <Container className="oplata">
                <button className="custom-btn btn-8">
                    <span>1</span>
                </button>
                <button className="custom-btn btn-8">
                    <span>1</span>
                </button>
            </Container>
            <Row>
                <Col sm={12}>
                    <BasketItemsList dev={dev}/>
                </Col>
            </Row>
            <div className="basketFinal">
                 Итого:{summ}
            </div>
        </Container>
    );
});

export default Basket;