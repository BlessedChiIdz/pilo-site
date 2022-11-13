import React, {useContext, useEffect} from 'react';
import PodDeviceItem from "./PodDeviceItem";
import {Row} from "react-bootstrap";
import {Context} from "../index";
import BasketItems from "./BasketItems";
import {getBasketDevices} from "../http/DeviceAPI";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";


const BasketItemsList = observer(() => {
    const {basket} = useContext(Context)
    return (
        <Row>
            {basket.Baskets.map(basket=>
                <BasketItems key = {basket.id} basket={basket}/>
            )}
        </Row>
    );
});

export default BasketItemsList;