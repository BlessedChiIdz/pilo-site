import React, {useContext, useState} from 'react';
import {addItemsToOrders, createType, deleteUserDevices, sendMail} from "../../http/DeviceAPI";
import {Button, Form, Modal} from "react-bootstrap";
import {Context} from "../../index";
import {toJS} from "mobx";
import Cookies from 'js-cookie'

const FinalForm = ({price,show,onHide,flag,showFinal}) => {
    const {basket} = useContext(Context)
    const [valueTel, setValueTel] = useState('')
    const [valueName, setValueName] = useState('')
    let text = ''
    const addType = async () => {
        let cookie = Cookies.get('CookForBasket')
        await deleteUserDevices(cookie)
        await addItemsToOrders({id_forCookie: cookie, name: valueName, tel: valueTel})
        setValueName(' ') //обновить state
        text = text + ' ' + valueName + ' ' + valueTel + '\n'
        basket.BasketsForBasket.map(basket => {
            text = text + 'Количество:' + basket[0].Count + ' '
            text = text + 'Название:' + basket[0].name + ' '
            text = text + 'Цена за штуку:' + basket[0].price + ' '
            text = text + 'Цена * количество:' + basket[0].finalPrice + ' '
            flag === 0 ? text = text + 'Наличка' + ' ' : text = text + 'Картой'
            text += '\n'
        })
        text = text + 'Финальная цена:' + price
        const formData = new FormData()
        formData.append('text', text)
        sendMail(formData).then(data => {
            setValueTel('')
            setValueName('')
            text = ''
            onHide()
            showFinal()
        })
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


export default FinalForm;