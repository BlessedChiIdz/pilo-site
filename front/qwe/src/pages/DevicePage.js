import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneDevices} from "../http/DeviceAPI";

const DevicePage = () => {
    const [device, setDeivce] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneDevices(id).then(data=>setDeivce(data))
    })

        return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <div className="d-flex flex-column align-items-center ms-5">
                        <h2>{device.name}</h2>
                    </div>
                </Col>
                <Col md={4}>
                    <Card
                    className="d-flex flex-column align-items-center justify-content-around"
                    style={{width:300, height:300,fontSize:32,border:'5px solid lightgray'}}
                    >
                        <h3>{device.price}</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default DevicePage;