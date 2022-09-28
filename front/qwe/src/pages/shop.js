import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDevices, fetchTypes} from "../http/DeviceAPI";

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
    fetchTypes().then(data=>device.setTypes(data))

    },[])
useEffect(()=>{
    fetchDevices(device.selectedType.id).then(data=> {
        device.setDevices(data)
    })
},[device.selectedType])

    return (
        <Container>
            <Row>
                <Col md={3} className="mt-3">
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <DeviceList></DeviceList>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;