import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";
import '../styles/DeviceItem.css'
const DeviceItem = ({device}) => {
    const  navigate = useNavigate()
    return (
        <div
            style={{display: "inline-block", textAlign: "center"}}
            onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}
        >
            <Card
                style={{
                    width: "20em",
                    height: "20em",
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    border: '0',
                    padding: '1em'
                }}
            >
                {/* Контейнер для квадратной картинки */}
                <div
                    style={{
                        width: "80%",
                        aspectRatio: "1/1", // Гарантирует квадратную форму
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover' // Сохраняет пропорции изображения
                        }}
                        src={process.env.REACT_APP_API_URL + device.img}
                        alt={device.name}
                    />
                </div>

                <div
                    className="CardTextName"
                    style={{
                        width: '100%',
                        padding: '0.5em',
                        textAlign: 'center',
                        marginTop: 'auto'
                    }}
                >
                    {device.name}
                </div>
            </Card>
        </div>
)
}

export default DeviceItem;