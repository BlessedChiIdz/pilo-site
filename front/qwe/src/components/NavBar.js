import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import DeviceStore from "../store/DeviceStore";
import BasketNOItems from "./Modals/BasketNOItems";


const NavBar = observer(() => {
    const  {device} = useContext(Context)
    let [visible,setVisible] = useState(false)
    const  {user} = useContext(Context)
    const navigate = useNavigate()
    let qwe = document.cookie;
    let zxc = qwe.slice("=")
    console.log(zxc[1])
    const [cook,setCook] = useState(zxc[1])
    let countCookie = 0;
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark fixed-top">
                <NavLink to={SHOP_ROUTE} style={{color: 'white',marginLeft:'20px'}}>СИБСТРОЙКОМПЛЕКС</NavLink>
                <NavLink to={BASKET_ROUTE} style={{color: 'white'}} className="ms-auto"><img className="" src="https://i.yapx.ru/U3aLX.jpg"></img></NavLink>
                <BasketNOItems show={visible} onHide={()=>setVisible(false)}/>
        </Navbar>
    );
});

export default NavBar;