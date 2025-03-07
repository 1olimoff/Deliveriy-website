import "./calculator.scss"

const Calculator = () => {
    return (
        <>
            <div className="calculator-section">
                <div className="container">
                    <h1>Калькулятор доставки</h1>

                    <div className="from-to">
                        <select name="" id="">
                            <option value="">Откуда</option>
                            <option value="">Bukhara</option>
                            <option value="">Tashkent</option>
                            <option value="">Samarkand</option>
                        </select>

                        <select name="" id="">
                            <option value="">Куда</option>
                            <option value="">Kokand</option>
                            <option value="">Fergana</option>
                            <option value="">Khorezm</option>
                        </select>
                    </div>

                    <section>
                        <div className="delivery-and-type">
                            <div className="delivery">
                                <span>1. Доставка</span>
                                <hr />
                                <form action="">
                                    <label for='express'><input type="radio" name="result" id="express" /> Экспресс 3-5 рабочих дней</label> <br />


                                    <label for='standart'><input type="radio" name="result" id="standart" /> Стандарт 5-7 рабочих дней</label><br />


                                    <label for='ultra'> <input type="radio" name="result" id="ultra" /> Ультра до 36 часов</label><br />

                                    <label for='auto'> <input type="radio" name="result" id="auto" /> Авто от 10 рабочих дней</label><br />
                                    <label for='auto-econom'> <input type="radio" name="result" id="auto-econom" /> Авто-эконом 15-20 рабочих дней</label>
                                </form>
                            </div>

                            <div className="type-delivery">
                                <span>2. Тип груза</span>
                                <hr />
                                <form action="">
                                    <label for='documents'><input type="radio" name="natija" id="documents" /> Документы</label><br />
                                    <label for='package'><input type="radio" name="natija" id="package" /> Посылка</label>
                                </form>

                                <div className="box-sizes">
                                    <p>Размеры упаковки (коробки)</p>
                                    <form action="">
                                        <input type="number" placeholder="x" />
                                        <input type="number" placeholder="y" />
                                        <input type="number" placeholder="x" />
                                    </form>
                                </div>

                                <div className="volumes">

                                    <div className="total-volume1">
                                        <span>Общий объем</span>
                                        <form action="">
                                            <input type="number" placeholder="m&#179;" />
                                        </form>
                                    </div>

                                    <div className="total-volume2">
                                        <span>Вес брутто</span>
                                        <form action="">
                                            <input type="number" placeholder="кг" />
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="price">
                                <span>3. Рассчитать цену</span>
                                <hr />
                                <p>Специальные услуги</p>
                                <form action="">
                                    <label><input type="checkbox" />Надежная упаковка, XX$</label> <br />
                                    <label><input type="checkbox" />Фотоотчет, XX$</label>
                                    
                                    
                                </form>

                                <div className="calculate">
                                    <input type="text" />
                                    <h1>0$</h1>
                                    <button>Рассчитать</button>
                                </div>
                            </div>

                        </div>
                        <div className="contact-us">
                            <p>* Цены основаны на сегодняшних тарифах и могут меняться ежедневно. Свяжитесь с нами для получения точных цен.</p>
                            <button>Связаться с нами</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Calculator;