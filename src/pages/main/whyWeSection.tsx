"use client"

import {Container} from "@/components/container";
import NoMoney from "../../../public/assets/icons/no-noney.svg";

const list = [
    {
        name: "Не берём предоплату",
        description: "Вы оплачиваете вознаграждение за нашу работу только после получения положительного решения в банке",
        icon: <NoMoney/>
    }
]

export const WhyWeSection = () => {
    return <section className="main__why-we-section">
        <Container>
            <div className="main__why-we-content">
                <h1>Почему стоит обратиться к нам</h1>

                <div className="main__why-we-cards">
                    {list.map((item, index) => {
                        return <div key={index} className="main__why-we-card-item">
                            <div>
                                {item.icon}
                            </div>
                            <div>
                                <div>
                                    {item.name}
                                </div>
                                <div>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </Container>
    </section>
}