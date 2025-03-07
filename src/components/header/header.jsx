import icon from "../../images/icon.svg"
import Login from "../../images/Login.svg"
import './header.scss'
import logo from "../../images/logo.svg"
import calc from "../../images/calculator.svg"
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className="countries-login container">
                <button className="btn-regions"><img src={icon} alt="" />Узбекистан</button>
                <button className='btn-lang'>RU</button>
                <button className='btn-login'><img src={Login} /> Login</button>
            </div>

            <header>
                <div className="header-box container">
                    <Link to='/'><img src={logo} alt="" /></Link>
                    <Link to='/parcel'>Отследить посылку</Link>
                    <Link to='/tariffs'>Тарифы</Link>
                    <Link to='/forbusiness'>Для бизнеса</Link>
                    <Link to='/warehouse'>Адреса складов</Link>
                    <Link to='/howitworks'>Как это работает</Link>
                    <Link to='/contacts'>Контакты</Link>
                    <button><img src={calc} alt="" /> Калькулятор</button>
                </div>
            </header>

            
        </>
    )
}

export default Header;