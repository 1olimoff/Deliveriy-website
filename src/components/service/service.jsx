import airplane from "../../images/airplane.png"
import car from "../../images/car.png"
import secretary from "../../images/secretary.png"
import hightown from "../../images/hightown.png"
import girl from "../../images/girl.png"
import delivery from "../../images/delivery.png"
import "./service.scss"

const Service = () => {
    return (
        <>
            <div className="service container">
                <h1>Услуги</h1>
                <div className="service-cards">
                    <div className="service-card">
                        <img src={airplane} alt="" />
                        <h3>Авиаперевозки</h3>
                        <p>Самый востребованный вид транспортировки. Современные воздушные суда позволяют перевозить грузы практически любого веса и размера. Основные преимущества авиаперевозки грузов — это быстрая доставка, широкая география и минимальные риски.</p>
                    </div>

                    <div className="service-card">
                        <img src={car} alt="" />
                        <h3>Наземные перевозки</h3>
                        <p>Автомобильные перевозки грузов по-прежнему лидирующий вид транспортировки. Использование автотранспорта позволяет проложить гибкий маршрут перевозки. На современных грузовых автомобилях можно перевозить любые виды и объёмы грузов, включая опасные и негабаритные.</p>
                    </div>

                    <div className="service-card">
                        <img src={secretary} alt="" />
                        <h3>Решения для бизнеса</h3>
                        <p>Мы сотрудничаем с производителями, интернет-магазинами, импортёрами и экспортёрами. Предоставляем услуги и поддержку в различных областях бизнеса. Помогаем с увеличением производства, развитием онлайн-продаж, организацией импорта и экспорта товаров.</p>
                    </div>

                    <div className="service-card">
                        <img src={hightown} alt="" />
                        <h3>Частным лицам</h3>
                        <p>Мы предоставляем полный комплекс услуг авиаперевозки грузов и автомобильной перевозки для физических лиц.</p>
                    </div>

                    <div className="service-card">
                        <img src={girl} alt="" />
                        <h3>ETHNO Buyer</h3>
                        <p>Услуга по организации выкупа товаров с любых онлайн-магазинов России и Турции с последующей их доставкой.</p>
                    </div>

                    <div className="service-card">
                        <img src={delivery} alt="" />
                        <h3>Трансграничные перевозки</h3>
                        <p>Мы являемся профессионалами в сфере наземных перевозок с более чем 12-летним опытом и отправили более 100 тысяч отправлений.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;