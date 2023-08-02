import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import "../styles/Carousel.css"
const Carouselzxc = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="carouselMain">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="/1.1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Большой ассортимент строительных материалов</h3>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="/2.2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Строим дома, бани, бытовки, хозблоки</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        alt="Responsive image"
                        className="d-block w-100 h-50"
                        src="/3.1.png"
                    />

                    <Carousel.Caption>
                        <h3>Доставка</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carouselzxc;