import React, {useContext, useEffect, useState} from 'react';
import DeviceList from "../components/DeviceList";
import PodDeviceList from "../components/PodDeviceList";
import {Button, Col, Container, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {Context} from "../index";
import {
    getBasketDevices,
} from "../http/DeviceAPI";
import {observable, set, toJS} from "mobx"
import BasketItemsList from "../components/BasketItemsList";
import {observer} from "mobx-react-lite";
import FinalForm from "../components/Modals/finalForm";
import CreateType from "../components/Modals/CreateType";
const Basket = observer(() => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    let [dev,setDev] = useState(0)
    let [price,setPrice] = useState(0)
    let [flagTxt,setFlagTxt] = useState(0)
    let [visible,setVisible] = useState(false)
    let cookie_req = document.cookie.split("=")
    let cookies = cookie_req[1]
    let summ=0
    let oplataTxt1 = "Наличные "
    let oplataTxt2 = "Безналичный "
    let flag=0
    useEffect( () =>{
        getBasketDevices(cookies).then(data=>basket.setBasketsForBasket(data))
    },[user.Item])
   basket.BasketsForBasket.map(basket=>{
        summ+=basket[0].finalPrice
    })
    useEffect( () =>{
        console.log(summ)
        setPrice(summ)
    },[basket.BasketsForBasket])
    const twpProc = () => {
        if(flag===0){
            setPrice(summ)
            setPrice(prevPrice => prevPrice*1.02)
            flag=1
            setFlagTxt(1)
        }
    }
    const Def = () =>{
        flag=0
        setPrice(summ)
        setFlagTxt(0)
    }
    console.log(flag)
    return (
        <Container>
            <Container className="oplata">
                <button className="custom-btn btn-7" onClick={twpProc}>
                    <span>Картой</span>
                </button>
                <button className="custom-btn btn-7" onClick={Def}>
                    <span>Наличными</span>
                </button>
            </Container>
            <Row>
                <Col sm={12}>
                    <BasketItemsList dev={dev}/>
                </Col>
            </Row>
            {
                price===0 ?
                <div className="basketFinal">
                    Итого:{summ}
                </div>
                    :
                    <div className="basketFinal">
                        {
                            flagTxt===0 ?
                                <div>{oplataTxt1}</div>
                                :
                                <div>{oplataTxt2}</div>
                        }
                        Итого:{price}
                    </div>
            }
            <Button onClick={()=>setVisible(true)}> add</Button>
            <FinalForm show={visible} onHide={()=>setVisible(false)}/>
        </Container>
    );
});

export default Basket;