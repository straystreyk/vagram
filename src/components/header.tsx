import Bulb from "@/../../public/assets/icons/bulb.svg"
import Link from "next/link";


const links = [
    {
        id: "services",
        name: "Услуги"
    },
    {
        id: "getCredit",
        name: "Получить кредит"
    },
    {
        id: "aboutUs",
        name: "О нас"
    },
    // {
    //     id: "reviews",
    //     name: "Отзывы",
    // }

]

export const Header = () => {
    return (
        <header className="header">
            <Link href="/" className="logo">
                <Bulb/>
                Кредитный Гений
            </Link>
            <div className="header__content">
                <ul className="header__nav">
                    {links.map(item => {
                        return <li key={item.id}>
                            {item.name}
                        </li>
                    })}
                </ul>
                <a className="header__contact-number" href={`tel:+79182895555`}>+7 (918) 289-55-55</a>
            </div>
        </header>
    )
}