import {Container} from "@/components/container";
import {LineForm} from "@/app/pages/main/helpSection";

import Money from "@/../public/assets/images/money-5k.png"
import Alarm from "@/../public/assets/images/alarm.png"
import Image from "next/image";

export const LastSection = () => {
    return (
        <section className="main__last-section">
            <Container>
                <div className="main__last-section-title">
                    <h1>Получите деньги уже через <span>2-3 дня!</span></h1>
                    <p>Просто оставьте заявку сейчас и наши специалисты свяжутся с вами в течение дня.</p>
                    <p>Заявка отправляется напрямую брокеру, никакого спама и рассылок.</p>
                </div>
                <div className="main__last-section-form">
                    <Image src={Money} alt="Money" className="image-money" />
                    <LineForm btnText="Получить деньги"/>
                    <Image src={Alarm} alt="Alarm" className="image-alarm" />
                </div>
            </Container>
        </section>
    )
}