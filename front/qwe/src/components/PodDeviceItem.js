import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const PodDeviceItem = ({device}) => {

    return (
            <Col sm={12}>
                <Row className="mt-3 border-bottom border-2 border-dark position-relative">
                <Col sm={6}>
                    <div>
                        {device.name}
                    </div>
                </Col>
                <Col sm={3}>
                    <div>
                        {device.price}P
                    </div>
                </Col>
                    <Col sm={3} className="text-center">
                        <Button variant={"outline-dark"} className="mb-2">Добавить в корзину</Button>
                    </Col>
                </Row>
            </Col>
    );
};

export default PodDeviceItem;