"use client"
import Rodal from 'rodal';
import {Container} from "@/components/container";
import MoneyImg from "../../../../public/assets/images/money.webp"
import Image from "next/image";

import 'rodal/lib/rodal.css';
import {Form} from "@/app/pages/main/greetingsBlock";
import {useState} from "react";

const cards = [
    {
        name: "Потребительский кредит",
        description: "Поможем с быстрым получением кредита на любые цели с низкой ставкой по минимальному пакету документов.",
        btnText: "Получить кредит"
    },
    {
        name: "Ипотека",
        description: "Подберем самые выгодные условия даже с плохой кредитной историей",
        extra: "Квартира / Дом / Коттедж / Комната / Коммерческая",
        btnText: "Получить ипотеку"
    },
    {
        name: "Кредит под залог недвижимости",
        description: "До 80% от стоимости объекта на любые цели. Также возможны займы под залог у частных лиц.",
        extra: "Квартира / Дом / Коттедж / Комната / Коммерческая",
        btnText: "Получить кредит под залог"
    },
    {
        name: "Кредит для бизнеса",
        description: "Все виды кредитов для юр. лиц, в том числе потребительские кредиты на физ. лицо для владельцев бизнеса.",
        btnText: "Получить кредит для бизнеса"
    },
    {
        name: "Рефинансирование",
        description: "Объединим все ваши кредиты и ипотеку в один под выгодный процент с возможностью добора денег сверху",
        btnText: "Сделать рефинансирование"
    },
    {
        name: "Займы под залог ПТС",
        description: "Деньги в день обращения, машина остается у вас",
        extra: "Минимум документов. Ставка от 3%",
        btnText: "Получить займ под ПТС"
    },
]

export const ServicesBlock = () => {
    const [visible, setVisible] = useState(false)

    return (
        <section id="services-section" className="main__services-section">
            <Container>
                <div className="main__services-title">
                    <h1>С нами получают деньги<br/>на разные нужды</h1>
                    <Image src={MoneyImg} alt="money"/>
                </div>
                <div className="main__services-cards">
                    {cards.map((item) => {
                        return (
                            <div className="main__services-card-item" key={item.name}>
                                <div className="main__services-card-item-title">{item.name}</div>
                                <div className="main__services-card-item-description">{item.description}</div>
                                {"extra" in item && <div className="main__services-card-item-extra">{item.extra}</div>}
                                <button onClick={() => setVisible(true)} className="button">{item.btnText}</button>
                            </div>
                        )
                    })}
                </div>
                <Rodal closeOnEsc visible={visible} onClose={() => setVisible(false)}>
                    <div>
                        <Form/>
                    </div>
                </Rodal>
            </Container>
        </section>
    )
}