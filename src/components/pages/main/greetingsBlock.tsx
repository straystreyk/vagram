'use client'

import {Container} from "@/components/container";
import {FormEvent, useState} from "react";
import Tick from "@/../public/assets/icons/tick.svg"
import {toast} from "sonner";

export const Form = () => {
    const [formState, setFormState] = useState({name: "", phone: ""})
    const [loading, setLoading] = useState(false)

    const onSubmit =
        (e:FormEvent) => {
            setLoading(true)
            e.preventDefault()
            try {
                fetch("/api/", {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({
                        phone: formState.phone, name: formState.name
                    })
                })
                toast.success('Заявка успешно отправлена')
                setFormState({name: "", phone: ""})
            } catch (e) {
                console.log(e.message)
                toast.error('Что-то пошло не так')
            } finally {
                setLoading(false)
            }


        }

    return (
        <form className="main__block-1-form" onSubmit={onSubmit}>
            <p>Деньги в день обращения</p>
            <div className="main__block-1-form-inputs">
                <input placeholder="Как вас зовут?" name="name" value={formState.name}
                       onChange={(e) => setFormState((p) => ({...p, [e.target.name]: e.target.value}))}/>
                <input placeholder="+7 999 99 99 99" required name="phone" value={formState.phone}
                       onChange={(e) => setFormState((p) => ({...p, [e.target.name]: e.target.value}))}/>
            </div>
            <button className="button" disabled={loading}>{loading ? "Подождите..." : "Отправить"}</button>
            <a href="/policy/" style={{fontSize: 12, textDecoration: "underline", textAlign: "center",marginTop: 12, alignSelf: "center"}}>Нажимая на кнопку вы соглашаетесь с
                политикой конфиденциальности</a>
        </form>
    )
}


export const GreetingsBlock = () => {


    return (
        <section className="main__block-1-section">
            <Container>
                <div className="main__block-1-wrapper">
                    <div className="main__block-1-content">
                        <h1>
                            Помощь кредитного
                            брокера в&nbsp;Краснодаре
                        </h1>
                        <div className="main__block-1-content-text">
                            <p>
                                <Tick/>
                                Без предоплаты
                            </p>
                            <p>
                                <Tick/>
                                Одобрили 94,6% клиентов
                            </p>
                            <p>
                                <Tick/>
                                Без справок и дохода
                            </p>
                            <p>
                                <Tick/>
                                57 банков партнёров
                            </p>
                            <p>
                                <Tick/>
                                Срочная выдача кредита за 1-3 дня
                            </p>
                        </div>
                    </div>
                    <Form/>
                </div>
            </Container>
        </section>
    )
}