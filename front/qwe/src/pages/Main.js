import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import "../styles/aboutComp.css"
const Main = () => {
    const  navigate = useNavigate()
    const click=()=>{
        navigate('/shop')
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <div className="min-h-screen bg-black text-white font-sans relative">
            {/* Noise overlay */}
            <div
                className="fixed inset-0 z-0 opacity-40 pointer-events-none"
                style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=black%20and%20white%20noise%20texture%20pattern%20with%20digital%20glitch%20effect%2C%20high%20contrast%20grainy%20background%20with%20pixel%20artifacts%20and%20distortion%2C%20cyberpunk%20aesthetic%2C%20abstract%20technological%20noise&width=1440&height=1024&seq=noise1&orientation=landscape')`,
                    backgroundSize: "cover",
                    mixBlendMode: "overlay",
                }}
            ></div>
            <main className="relative z-10">
                <div className="min-h-[80vh] relative overflow-hidden">
                    {/* Background Image with Glitch Effect */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: `url('https://readdy.ai/api/search-image?query=futuristic%20cyberpunk%20cityscape%20with%20neon%20lights%20and%20digital%20glitch%20effects%2C%20dystopian%20urban%20environment%20with%20holographic%20projections%20and%20abstract%20geometric%20patterns%2C%20high%20contrast%20monochromatic%20scene%20with%20electric%20green%20accents%20and%20technological%20atmosphere&width=1440&height=800&seq=hero2&orientation=landscape')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            filter: "contrast(1.2) brightness(0.8)",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>
                    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 space-y-6 mb-10 md:mb-0">
                            <h1 className="text-5xl md:text-7xl font-bold tracking-wider glitch-text">
                                NOSEBLEED TWO
                            </h1>
                            <div
                                className="max-w-xl space-y-4 text-sm md:text-base leading-relaxed"
                                style={{ fontFamily: "monospace" }}
                            >
                                <p>
                                    ДОЛГОЖДАННЫЙ РЕЛИЗ ОДНОИМЕННОЙ КОЛЛЕКЦИИ, КОТОРАЯ УСПЕЛА
                                    ПОЛУЧИТЬ КУЛЬТОВЫЙ СТАТУС ДО ДЕБЮТА НА НЕДЕЛЕ МОДЫ В 2024
                                    ГОДУ. ЭТО НЕ ПРОСТО ЖИВЕЙ МНОГО ОТ ТОГО, ЧТО БЫЛО, ЗДЕСЬ
                                    ПЕРЕОСМЫСЛЕНА ОРИГИНАЛЬНУЮ КОНЦЕПЦИЮ, ОБРАЗЫ ЗАДУМКИ НА ИНОЙ
                                    КАЧЕСТВЕННЫЙ УРОВЕНЬ ВЫГЛЯДИТ НАВЯЗЧИВЫМИ ЗА ЭТИ ГОДЫ ОПЫТА
                                    АВАНГАРД, РЕТРО ФУТУРИЗМ И ПАНК ЭСТЕТИКА НАКЛАДЫВАЕТСЯ ВО
                                    ВНИМАТЕЛЬНО ВЫСТРОЕННОЙ СИЛУЭТ СТИЛЕ СОЕДИНЯЕМ УМЕРЕННЫЙ
                                    ДИСПЕРС, ПРОПОРЦИЙ ТЕКСТУР ТКАНЕЙ И ПРИГЛУШЕННЫЕ ВИНТАЖНОСТИ.
                                </p>
                            </div>
                            <a
                                href="#"
                                className="inline-block bg-blue-600 text-white px-8 py-3 tracking-wider !rounded-button cursor-pointer whitespace-nowrap"
                                style={{ fontFamily: "monospace", letterSpacing: "0.2em" }}
                                onClick={()=>click()}
                            >
                                <span className="text-lg">{">"}</span>В КАТАЛОГЕ
                            </a>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center">
                            {/* Main product image */}

                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-12 border-t border-green-400/30 relative z-10">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                            <div>
                                <h3 className="text-xl font-bold mb-4 text-green-400">
                                    BLACKSERIES
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Бренд уличной одежды, вдохновленный киберпанк эстетикой и
                                    футуристическими технологиями. Создаем одежду на стыке моды и
                                    цифрового искусства.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-4 uppercase">
                                    Информация
                                </h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            О бренде
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Доставка и оплата
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Возврат
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Размерная сетка
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Контакты
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-4 uppercase">Каталог</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Верхняя одежда
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Футболки
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Худи и свитшоты
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Брюки и шорты
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            Аксессуары
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-base font-bold mb-4 uppercase">Контакты</h4>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-center">
                                        <i className="fas fa-map-marker-alt text-green-400 mr-3"></i>
                                        <span className="text-gray-400">
                      Москва, ул. Цифровая, 42
                    </span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-phone text-green-400 mr-3"></i>
                                        <a
                                            href="tel:+74951234567"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                        >
                                            +7 (495) 123-45-67
                                        </a>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-envelope text-green-400 mr-3"></i>
                                        <a
                                            href="mailto:info@blackseries.ru"
                                            className="text-gray-400 hover:text-green-400 transition-colors"
                                        >
                                            info@blackseries.ru
                                        </a>
                                    </li>
                                </ul>
                                <div className="mt-6">
                                    <h5 className="text-sm font-bold mb-3">Мы в соцсетях</h5>
                                    <div className="flex space-x-4">
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            <i className="fab fa-telegram text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            <i className="fab fa-vk text-xl"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                                        >
                                            <i className="fab fa-instagram text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-500 text-sm">
                                © 2025 BLACKSERIES. Все права защищены.
                            </p>
                            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                                <span className="text-gray-500 text-sm">Способы оплаты:</span>
                                <i className="fab fa-cc-visa text-gray-400"></i>
                                <i className="fab fa-cc-mastercard text-gray-400"></i>
                                <i className="fab fa-cc-paypal text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Main;