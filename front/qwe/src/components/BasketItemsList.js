import React, {useContext, useEffect} from 'react';
import PodDeviceItem from "./PodDeviceItem";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItems from "./BasketItems";
import {fetchOneDeviceList, getBasketDevices} from "../http/DeviceAPI";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";


const BasketItemsList = observer(({dev}) => {
    const {basket} = useContext(Context)
    console.log(toJS(basket.BasketsForBasket))
    return (
        <Row>
            {basket.BasketsForBasket.map(basket=>
                <BasketItems key = {basket.id} basket={basket} dev={dev}/>
            )}
        </Row>
    );
});

export default BasketItemsList;