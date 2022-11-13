import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import DeviceStore from "../store/DeviceStore";


const NavBar = observer(() => {
    const  {device} = useContext(Context)
    const  {user} = useContext(Context)
    const navigate = useNavigate()

    let countCookie = 0;
    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>СИБСТРОЙКОМПЛЕКС</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(ADMIN_ROUTE)}>Админ панель</Button>
                        <Button variant={"outline-light"}
                        className="ms-4"
                        onClick={()=>logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: "white"}}>
                        <Button variant={"outline-light"} onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
            <Container className="text-primary">{device.Count}</Container>
            <NavLink to={BASKET_ROUTE} style={{color: 'white'}}>СИБСТРОЙКОМПЛЕКС</NavLink>
            <img className="img-fluid" src="https://forum.e-liquid-recipes.com/uploads/default/original/3X/c/f/cf192e53a892ca8ed565985bb8075e3e0175af96.png"></img>
        </Navbar>
    );
});

export default NavBar;