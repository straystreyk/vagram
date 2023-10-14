"use client"

import {Container} from "@/components/container";
import Tick from "../../../../public/assets/icons/tick.svg";
import {useForm} from "@/components/pages/main/greetingsBlock";
import {FC} from "react";

const LineForm:FC<{btnText?:string}> = ({btnText = "Снизить нагрузку"}) => {
    const { onChange, formState, onSubmit } = useForm()
    return (
        <form onSubmit={onSubmit} className="line-form">
            <input value={formState.name} onChange={onChange} name="name" type="text" placeholder="Как вас зовут?"/>
            <input required value={formState.phone} onChange={onChange} name="phone" type="tel" placeholder="+7 999 99 99 99"/>
            <button className="button">{btnText}</button>
        </form>
    )
}

export const HelpSection = () => {
    return (
        <section className="main__help-section">
            <Container>
                <div className="main__help-content">
                    <h1>Поможем снизить финансовую&nbsp;нагрузку</h1>
                    <div className="main__help-content-info">
                    <p><Tick/> Переведем все Ваши кредиты в один банк</p>
                    <p><Tick/> Поможем снизить ежемесячный платёж и процентную ставку</p>
                    <p><Tick/> Возможна сумма сверху на любые цели</p>
                    </div>

                    <div className="main__help-mailing-title">
                        Оставьте Ваш номер телефона и мы позвоним в течении 3 часов и расскажем Вам как можно снизить Вашу финансовую нагрузку
                    </div>
                    <LineForm />
                </div>
            </Container>
        </section>
    )
}