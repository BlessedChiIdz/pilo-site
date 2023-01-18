import React, {useContext, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchDevices, fetchTypes} from "../http/DeviceAPI";
import CookieAlert from "../components/Modals/CookieAlert";

const Shop = observer(() => {
    const {device} = useContext(Context)
    const {user} = useContext(Context)
    console.log(user.cookieAlert)
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
            <CookieAlert show={user.cookieAlert} onHide={()=>user.setCookieAlert(false)}/>
        </Container>
    );
});

export default Shop;