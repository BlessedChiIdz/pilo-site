import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {addItemsToOrders, deleteUserDevices, sendMail} from "../../http/DeviceAPI";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";
import Cookies from 'js-cookie'

const FinalFormOnline = ({price,show,onHide,flag,showFinal}) => {
    const {basket} = useContext(Context)
    const [valueTel, setValueTel] = useState('')
    const [valueName, setValueName] = useState('')
    const [loading, setLoading] = useState(false);
    let cookie = Cookies.get('CookForBasket')

    const addType = async () => {
        setLoading(true);
        await addItemsToOrders({id_forCookie:cookie,name:valueName,tel:valueTel})
        await deleteUserDevices(cookie)
        try {
            const response = await axios.post('http://localhost:5000/api/cassa/create-payment', {
                amount: price,
                description: 'Покупка подписки',
            });

            window.location.href = response.data.url;
        } catch (error) {
            alert('Ошибка при создании платежа');
        } finally {

            setLoading(false);
        }

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
                    Введите телефон и коментарий к заказу если нужно
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={valueName}
                        onChange={e=>setValueName(e.target.value)}
                        placeholder={"Введите ФИО"}
                    />
                </Form>
                <Form>
                    <Form.Control
                        value={valueTel}
                        onChange={e=>setValueTel(e.target.value)}
                        placeholder={"Введите телефон"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FinalFormOnline;