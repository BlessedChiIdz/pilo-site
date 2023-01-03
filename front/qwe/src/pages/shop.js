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
            <div style={{marginTop:"70px"}}></div>
            <Row className="col-auto d-flex">
                <Col md={3} className="mt-3 buttons">
                    <TypeBar/>
                </Col>
                <div md={9} className="col">
                    <DeviceList></DeviceList>
                </div>
            </Row>
        </Container>
    );
});

export default Shop;