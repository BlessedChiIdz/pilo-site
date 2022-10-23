import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchDeviceList, fetchDevices, fetchOneDevices} from "../http/DeviceAPI";
import PodDeviceList from "../components/PodDeviceList"
import {Context} from "../index";
import {login, registration} from "../http/userAPI";
import {SHOP_ROUTE} from "../utils/consts";
const DevicePage = () => {
    const [deviceInfo, setDeviceInfo] = useState({info: []})
    const {id} = useParams()
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchDeviceList(id).then(data=>device.setDeviceList(data))
        fetchOneDevices(id).then(data=>setDeviceInfo(data))
    },[])


        return (
        <Container className="mt-3">
            <Row>
                <Col sm={6}>
                    НАИМЕНОВАНИЕ
                </Col>
                <Col sm={3}>
                    цена за шт
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <PodDeviceList/>
                </Col>
            </Row>
            <Container className="px-4 pt-3">
                <Row className="gx-5">
                    <Col>
                        <Container>
                            <p>
                                <strong>
                            Учтите что  обработка заказа может достигать 1 суток, за вопросами вы можете обращаться к консультантам<br></br>
                                    <em>
                                        <a href="tel: +79137190734">
                                            +79137190734
                                        </a>
                                    </em>
                                </strong>

                            </p>
                        </Container>

                    </Col>
                    <Col>
                        <Container className="text-center">
                            <Image className="" width={250} height={250} src={process.env.REACT_APP_API_URL + deviceInfo.img}/>
                        </Container>
                    </Col>
                    <Col> Цена указана при наличном расчете, при безналичном+2%</Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DevicePage;