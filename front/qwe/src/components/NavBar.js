import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";


const NavBar = observer(() => {
    const  {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () =>{
        user.setUser({})
        user.setIsAuth(false)
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE}>СИБСТРОЙКОМПЛЕКС</NavLink>
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
        </Navbar>
    );
});

export default NavBar;