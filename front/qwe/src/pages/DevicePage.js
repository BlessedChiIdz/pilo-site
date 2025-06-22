import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import { fetchDeviceList, fetchDevices, fetchOneDevices} from "../http/DeviceAPI";
import PodDeviceList from "../components/PodDeviceList"
import {Context} from "../index";
import {toJS} from "mobx";
const DevicePage = () => {
    const [deviceInfo, setDeviceInfo] = useState({info: []})
    const {id} = useParams()
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchDeviceList(id).then(data=>device.setDeviceList(data))
        fetchOneDevices(id).then(data=>setDeviceInfo(data))
    },[])

        return (
        <Container className="mt-3 ">
            <div style={{marginTop:"60px"}}></div>
            <Row className="border-bottom border-2 border-dark pb-3" >
                <Col sm={6}>
                    Размер
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
                        <Container style={{fontSize:"4em",fontWeight: "bold"}}>
                            {deviceInfo.name}
                        </Container>

                    </Col>
                    <Col>
                        <Container className="text-center">
                            <Image className="" width={350} height={350} src={process.env.REACT_APP_API_URL + deviceInfo.img}/>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DevicePage;