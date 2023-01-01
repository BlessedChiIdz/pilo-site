import React from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/aboutComp.css"
import Carouselzxc from "../components/Carousel";
const Main = () => {
    const  navigate = useNavigate()
    const click=()=>{
        navigate('/shop')

    }
    return (
        <div>
            <Carouselzxc/>
            <button
                className="custom-btn btn-5"
                onClick={click}>
                <span style={{fontSize:"1.9em"}}>К КАТАЛОГУ ПРОДУКЦИИ</span>
            </button>
            <div className="aboutComp">
                <div className="textComp">
                    <div>
                        <h1><b>О компании</b></h1>
                    </div>
                    <div>Мы предлагаем вам большой ассортимент различных пиломатериалов и материалов для строительства. Если не уверенны в выборевам с радосью помогут наши консультанты. Заказ так же можно оформить как на сайте и заказать доставку, так и посетить лично наш магазин и приобрести нужные вам материалы <br></br> Находимся в с.Ярково на улице</div>
                    <img src="/4984048399-_2_.png" className="img-fluid" alt="Responsive image"/>
                </div>
            </div>
            <div className="ourServices">
                <h1><b>Наши Услуги</b></h1>
            </div>
        </div>
    );
};

export default Main;