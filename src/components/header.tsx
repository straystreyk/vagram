import Bulb from "@/../../public/assets/icons/bulb.svg"


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
    {
        id: "reviews",
        name: "Отзывы"
    },
    {
        id: "contacts",
        name: "Контакты"
    },

]

export const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            <Bulb />
            Кредитный Гений
            </div>
            <div className="header__content">
                <ul className="header__nav">
                    {links.map(item => {
                        return <li key={item.id}>
                            {item.name}
                        </li>
                    })}
                </ul>
                <a className="header__contact-number" href={`tel:+79882812276`}>+7 (988) 281-22-76</a>
            </div>
        </header>
    )
}