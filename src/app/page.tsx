import {Metadata} from "next";
import {MainSections} from "@/app/pages/main/mainSections";
import OgImage from "@/../public/assets/images/og.png"


export const metadata: Metadata = {
    title: 'Кредитный брокер в Краснодаре',
    description: 'Помощь в получении кредита в Краснодаре. Без предоплат. Одобрение в 94,6% случаев! Надежный брокер. Все виды кредитов. от 5,9% годовых!',
    keywords: "кредитный брокер краснодар, помощь в получении кредита, помощь в получении кредита без предоплат краснодар",
    openGraph: {
        title: 'Кредитный брокер в Краснодаре',
        description: 'Помощь в получении кредита в Краснодаре. Без предоплат. Одобрение в 94,6% случаев! Надежный брокер. Все виды кредитов. от 5,9% годовых!',
        url: "https://creditgenius.ru/",
        type: "website",
        images: OgImage.src
    }
}


const Home = () => {
    return (
        <main className="main">
            <MainSections />
        </main>
    )
}

export default Home
