import React from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/aboutComp.css"
import Carouselzxc from "../components/Carousel";
import CookieAlert from "../components/Modals/CookieAlert";
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
                    <div style={{marginTop:"0.5%"}}>Мы предлагаем вам большой ассортимент различных пиломатериалов и материалов для строительства. Если не уверенны в выборевам с радосью помогут наши консультанты. Заказ так же можно оформить как на сайте и заказать доставку, так и посетить лично наш магазин и приобрести нужные вам материалы <br></br> Находимся в с.Ярково на улице</div>
                </div>
                <div className="imageComp" style={{display:"inline-block",width:"35%",marginTop:"6.5%"}}><img src="/dom-banya-dmitrov-6x8-3d-2609o.jpg" className="img-fluid" alt="Responsive image"/></div>
            </div>
            <div className="ourServices">
                <h1 className="hueta"><b>Наши Услуги</b></h1>
                <div className="textService">
                    Мы занимаемся строительством домов, бань из бруса, каркасных домов,
                    монтажом кровельных систем любой сложности
                    также в наши услуги входит отстрочка пиломатериала промышленым оборудованием,
                    Мы доставляем строительные материалы в с. Ярково и по всем
                    близлежащим территориям. актуальные расценки на доставку
                    можно расчитать при заказе, а также узнать у наших специалистов.
                </div>
                <div className="imageComp" style={{display:"inline-block",width:"35%",paddingBottom:"1%"}}><img src="/uspenka01.jpg" className="img-fluid" alt="Responsive image"/></div>
            </div>
            <div className="blackline"></div>
            <div className="aboutcomp">
                <div className="firstcolumn">
                    <div className="aboutend">© 2018</div>
                    <div className="aboutend">СИБСТРОЙКОМПЛЕКС</div>
                    <div className="rightsq">ВСЕ ПРАВА ЗАЩИЩЕНЫ</div>
                    <div>Г.НОВОСИБИРСК, УЛ.СОВЕТСКАЯ,1А К1</div>
                </div>
                <div className="secondcolumn">
                    <div>2400940@BK.RU</div>
                    <div>+79232400940</div>
                    <div>+79231510440</div>
                </div>
            </div>
            <div className="dot">.</div>
        </div>
    );
};

export default Main;