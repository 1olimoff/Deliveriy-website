import femaledeliverer from "../../images/female-deliverer.png"
import "./delivery.scss"

const Delivery = () => {
    return (
        <>
            <div className="delivering container">
                <section className="text-and-img">

                    <div className="delivery-text">
                        <h2>Ваш <span>молниеносный</span> партнер по доставке</h2>
                        <p>Доставляем документы, посылки, интернет-заказы и коммерческие грузы между следующими странами: Россия, Узбекистан, Турция, Казахстан, Таджикистан, Кыргызстан, Китай, ОАЭ</p>

                        <div className="delivery-btn">
                            <button className="btn-one">Узнать стоимость доставки</button>
                            <button className="btn-two">Отследить посылку</button>
                        </div>
                    </div>
                    
                    <div className="delivery-image">
                        <img src={femaledeliverer} alt="" />
                    </div>
                </section>
                <section>
                    <div className="delivery-cards">
                        <div className="delivery-card">
                            <h2>24000+</h2>
                            <p>зарегистрированных клиентов сервиса</p>
                        </div>

                        <div className="delivery-card">
                            <h2>8</h2>
                            <p>доставляем посылки и грузы из 8 стран мира</p>
                        </div>

                        <div className="delivery-card">
                            <h2>1000</h2>
                            <p>интернет-магазинов в нашем каталоге</p>
                        </div>

                        <div className="delivery-card">
                            <h2>26000+</h2>
                            <p>количество товаров, которые мы доставили</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Delivery;