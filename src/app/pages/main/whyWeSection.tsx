"use client"

import {Container} from "@/components/container";
import NoMoney from "../../../../public/assets/icons/no-noney.svg";
import Fast from "../../../../public/assets/icons/fast.svg";
import NoPaper from "../../../../public/assets/icons/no-paper.svg";
import Hands from "../../../../public/assets/icons/hands.svg";
import Check from "../../../../public/assets/icons/check.svg";
import Secret from "../../../../public/assets/icons/secret.svg";

const list = [
    {
        name: "Не берём предоплату",
        description: "Вы оплачиваете вознаграждение за нашу работу только после получения положительного решения в банке",
        icon: <NoMoney/>
    },
    {
        name: "Решение за 3 дня",
        description: "Работаем оперативно, не теряя времени подбираем лучшие условия и получаем решение по ним",
        icon: <Fast/>
    },
    {
        name: "Нет бумажной волоките",
        description: "Вам не нужно узнавать какие документы требуются в банки, мы подготовим для Вас пакет документов для подачи в банк",
        icon: <NoPaper/>
    },
    {
        name: "Честность в работе",
        description: "Не работаем с мошенниками и аферистами, дорожим своей и вашей репутацией и не используем черных схем в работе",
        icon: <Hands/>
    },
    {
        name: "Лучшие условия",
        description: "Наличие партнерских отношений с банками и постоянный мониторинг рынка позволяют предложить лучшие условия по банковским продуктам",
        icon: <Check/>
    },
    {
        name: "Конфиденциальность",
        description: "Вся информация о вас будет надежно защищена и ограничена доступом",
        icon: <Secret/>
    }
]

export const WhyWeSection = () => {
    return (
        <section id="why-we-section" className="main__why-we-section">
            <Container>
                <div className="main__why-we-content">
                    <h1>Почему стоит обратиться к&nbsp;нам</h1>

                    <div className="main__why-we-cards">
                        {list.map((item, index) => {
                            return <div key={index} className="main__why-we-card-item">
                                <div className="main__why-we-card-item-icon">
                                    {item.icon}
                                </div>
                                <div className="main__why-we-card-item-content">
                                    <div className="main__why-we-card-item-name">
                                        {item.name}
                                    </div>
                                    <div className="main__why-we-card-item-description">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </Container>
        </section>
    )
}