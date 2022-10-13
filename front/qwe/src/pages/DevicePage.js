import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchDeviceList, fetchOneDevices} from "../http/DeviceAPI";
import PodDeviceList from "../components/PodDeviceList"
const DevicePage = () => {
    // const [deviceList, setDeivceList] = useState()
    // const {id} = useParams()
    // useEffect(()=>{
    //     fetchDeviceList(id).then(data=>setDeivceList(data))
    // },[])
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
        </Container>
    );
};

export default DevicePage;