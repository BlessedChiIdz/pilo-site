import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {addBasketDevice, CheckBasketId, fetchTypes, getBasketId} from "../../http/DeviceAPI";
import {Context} from "../../index";
import data from "bootstrap/js/src/dom/data";
import {observer} from "mobx-react-lite";

 const Count = observer(({show, onHide, id}) => {
    const {basket} = useContext(Context)
    const [value, setValue] = useState(2)
    const [BasketId ,setBasketId] = useState(0)
    let cookie_req = document.cookie.split("=")
    let cookies = cookie_req[1]
     useEffect( () =>{
        getBasketId(cookies).then(data=>basket.setBaskets(data))
        },[])
    // useEffect( () =>{
    //     getBasketId(cookies).then(data=>setBasketId(data))
    // },[])
    const click = () => {
        if (value==0){
            onHide()
        }
        else{
        addBasketDevice({Count:value,basketId:basket.Baskets[0].id,deviceListId:id},).then(data=>onHide())
        }
    }
    //let NormObj = BasketId.split(',')
    //console.log(basket.Baskets[0])
     console.log(BasketId[0])

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Количество
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e=>setValue(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите количество товара"
                        type="number"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={click}>Купить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default Count;