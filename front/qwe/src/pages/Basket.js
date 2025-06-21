import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Context} from "../index";
import {getBasketDevices, MainApi} from "../http/DeviceAPI";
import BasketItemsList from "../components/BasketItemsList";
import {observer} from "mobx-react-lite";
import FinalForm from "../components/Modals/finalForm";
import CreateType from "../components/Modals/CreateType";
import {useNavigate} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import FinalAlert from "../components/Modals/FinalAlert";
import Cookies from 'js-cookie'
import FinalFormOnline from "../components/Modals/FinalFormOnline";
const Basket = observer(() => {
    let qwe = document.cookie;
    let zxc = qwe.slice("=")
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    let [showFinal, setShowFinal] = useState(false)
    let [dev,setDev] = useState(0)
    let [price,setPrice] = useState(0)
    let [flagTxt,setFlagTxt] = useState(0)
    let [visible,setVisible] = useState(false)
    let [visibleOnlie, setVisibleOnline] = useState(false)
    let cookie_req = document.cookie.split("=")
    let cookies = cookie_req[1]
    let test = Cookies.get('CookForBasket')
    let summ=0
    let oplataTxt1 = "Наличный"
    let oplataTxt2 = "Безналичный при получении товара"
    let oplataTxt3 = "Безналичный онлайн"
    let flag=0
    const navigate = useNavigate()
    const twpProc = () => {
        if(flag===0){
            flag=1
            setFlagTxt(1)
        }
    }
    const Def = () =>{
        flag=0
        setPrice(summ)
        setFlagTxt(0)
    }
    const online = () => {
        flag = 2
        setFlagTxt(2)
    }
    if(zxc[1]!==undefined){
    useEffect( () =>{
        getBasketDevices(test).then(data=>basket.setBasketsForBasket(data))
    },[user.Item])
   basket.BasketsForBasket.map(basket=>{
        summ+=basket[0].finalPrice
    })
    useEffect( () =>{
        setPrice(summ)
    },[basket.BasketsForBasket])
    }
    return (
        <Container>
            <div style={{marginTop:"60px"}}></div>
            <Row>
                <Col sm={12}>
                    <BasketItemsList dev={dev}/>
                </Col>
            </Row>
            <Container className="oplata">
                <button className="custom-btn btn-7" onClick={twpProc}>
                    <span>Картой офлайн</span>
                </button>
                <button className="custom-btn btn-7" onClick={Def}>
                    <span>Наличными</span>
                </button>
                <button className="custom-btn btn-7" onClick={online}>
                    <span>Картой онлайн</span>
                </button>
            </Container>
            <Container className="oplata">
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
                                <div>
                                {
                                    flagTxt === 1 ?
                                    <div>{oplataTxt2}</div>
                                    :
                                    <div>{oplataTxt3}</div>
                                }
                                </div>
                        }
                        Итого:{price}
                    </div>
            }
                {
                    flagTxt === 2 ?
                    <Button onClick={()=>setVisibleOnline(true)}>Оплатить</Button> :
                    <Button onClick={()=>setVisible(true)}>Оформить</Button>

                }
                <FinalFormOnline price={price} flag={flagTxt} show={visibleOnlie} onHide={()=>setVisibleOnline(false)}></FinalFormOnline>
                <FinalForm  price={price} flag={flagTxt} show={visible} onHide={()=>setVisible(false)} showFinal={()=>setShowFinal(true)}/>
                <FinalAlert showFinal={showFinal} onHideFinal={()=>{setShowFinal(false); navigate('/#')}}/>
            </Container>
        </Container>

    );
});

export default Basket;