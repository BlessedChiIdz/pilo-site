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
            size="xl"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заказы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>ФИО</th>
                            <th>Телефон</th>
                            <th>Заказы</th>
                            <th>Действие</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.tel}</td>
                                <td>{item.items}</td>
                                <td>
                                    <Button
                                        variant="danger"
                                        onClick={() => deleteOneOrderF(item.id)}
                                    >
                                        Заказ получен
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default OrderList;