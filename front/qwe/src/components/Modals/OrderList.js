import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {deleteOneOrder, getOrdersList} from "../../http/DeviceAPI";
import {get} from "mobx";

const OrderList = ({show, onHide}) => {
    const [items, setItems] = useState([])
    const [updatePage, setUpdatePage] = useState(0)
    useEffect(() => {
        const getItems = getOrdersList().then(data=>{setItems(data)})
    }, [updatePage]);
    const deleteOneOrderF = (id) =>{
        const item = deleteOneOrder(id).then(data=>{setUpdatePage(updatePage+1)})
        return 0
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{alignItems: "center"}}>
                    <div style={{display: "inline-block"}}>ФИО</div>
                    <div style={{display: "inline-block", marginLeft: "20%"}}>Телефон</div>
                    <div style={{display: "inline-block", marginLeft: "20%"}}>заказы</div>
                </div>
                {items.map(item=>(
                    <div style={{alignItems: "center"}}>
                        <div style={{display: "inline-block"}}>{item.name}</div>
                        <div style={{display: "inline-block", marginLeft: "20%"}}>{item.tel}</div>
                        <div style={{display: "inline-block", marginLeft: "20%"}}>{item.items}</div>
                        <Button onClick={()=>deleteOneOrderF(item.id)}>Заказ получен</Button>
                    </div>
                ))}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderList;