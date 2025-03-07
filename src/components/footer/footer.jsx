import logo from "../../images/logo.svg"
import icon from "../../images/icon.svg"
import "./footer.scss"
import Login from "../../images/Login.svg"
import calc from "../../images/calculator.svg"
import mastercard from "../../images/Mastercard.png"
import visa from "../../images/Visa.png"
import uzcard from "../../images/uzcard.svg"
import humo from "../../images/humo.svg"
import payme from "../../images/payme.svg"
import click from "../../images/click.svg"
import apple from "../../images/appleicon.svg"
import Googleplay from "../../images/Googleplay.svg"
import telegram from "../../images/telegram.svg"
import facebook from "../../images/facebook.svg"
import linkedin from "../../images/linkedin.svg"

const Footer = () => {
    return (
        <>
            <section  className="footer-part">

                <div className="container">
                    <div className="footer-up">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                            <span>© Все права защищены</span>
                        </div>

                        <div className="magazines">
                            <ul>
                                <li><a href="">Магазины</a></li>
                                <li><a href="">Тарифы</a></li>
                                <li><a href="">Отследить посылку</a></li>
                                <li><a href="">Как это работает</a></li>
                                <li><a href="">О компании</a></li>
                                <li><a href="">Для бизнеса</a></li>
                            </ul>
                        </div>

                        <div className="address">
                            <ul>
                                <li><a href="">Адреса складов</a></li>
                                <li><a href="">Контакты</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Запрещенные товары</a></li>
                                <li><a href="">Общие условия пользования</a></li>
                                <li><a href="">Политика конфиденциальности</a></li>
                            </ul>
                        </div>

                        <div className="countries">
                            <p>Сменить страну</p>
                            <p>Вы можете изменить страну и изучить содержимое сайта для другого региона</p>
                            <button className="btn-regions"><img src={icon} alt="" />Узбекистан</button>

                            <div className="calc-and-login">
                            <button><img src={calc} alt="" /> Калькулятор</button>
                            <button className='btn-login'><img src={Login} /> Login</button>
                            </div>
                        </div>
                    </div>


                    <div className="footer-down">
                        <div className="payments">
                            <div className="payment">
                                <img src={mastercard} alt="" />
                                <img src={visa} alt="" />
                                <img src={uzcard} alt="" />
                                <img src={payme} alt="" />
                                <img src={click} alt="" />
                                <img src={humo} alt="" />
                            </div>

                            <div className="google-and-app">
                                <button className="appstore"><img src={apple} alt="" /></button>
                                <button className="playmarket" ><img src={Googleplay} alt="" /></button>
                            </div>
                        </div>

                        <div className="comment">
                            <p>Designed and Developed By KelyanMedia</p>
                        </div>

                        <div className="social-media-icons">
                            <img src={facebook} alt="" />
                            <img src={telegram} alt="" />
                            <img src={linkedin} alt="" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;