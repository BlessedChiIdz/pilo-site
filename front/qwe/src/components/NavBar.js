import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_PAGE_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import DeviceStore from "../store/DeviceStore";
import BasketNOItems from "./Modals/BasketNOItems";


const NavBar = observer(() => {
    const {basket} = useContext(Context)
    const  {device} = useContext(Context)
    const  {user} = useContext(Context)
    const navigate = useNavigate()

    return (
        <header className="relative z-10 px-4 py-3 border-b border-green-400/30" style={{backgroundColor: "black"}}>
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <a
                        href="#"
                        className="text-green-400 font-bold text-xl tracking-widest"
                        onClick={()=>{navigate(MAIN_PAGE_ROUTE)}}
                    >
                        BLACKSERIES
                    </a>
                    <nav className="hidden md:flex space-x-6">
                        <a
                            href="#"
                            className="bg-green-400 text-black px-4 py-1 !rounded-button cursor-pointer whitespace-nowrap"
                            onClick={()=>{navigate(SHOP_ROUTE)}}
                        >
                            КАТАЛОГ
                        </a>
                    </nav>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <a
                            onClick={() => navigate(BASKET_ROUTE)}
                            className="text-green-400 hover:text-green-300 cursor-pointer"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <button
                    className="md:hidden text-green-400 focus:outline-none cursor-pointer whitespace-nowrap"
                >
                </button>
            </div>
        </header>
    );
});

export default NavBar;