"use client"

import Bulb from "@/../../public/assets/icons/bulb.svg"
import Burger from "@/../../public/assets/icons/burger.svg"
import Cross from "@/../../public/assets/icons/cross.svg"
import Link from "next/link";
import {useBearStore} from "@/store/store";
import {FC, useState} from "react";

const LinkItem: FC<{ item: any, isActive?: boolean }> = ({item, isActive}) => {
    return (
        <li onClick={() => {
            const id = item.ids[0]
            document.getElementById(id)?.scrollIntoView({behavior: "smooth"})
        }} className={`header__nav-item header__nav-item-active-${isActive}`}>
            {item.name}
        </li>
    )
}


const links = [
    {
        name: "Услуги",
        ids: ["services-section"],
    },
    {
        name: "Получить кредит",
        ids: ["help-section"],
    },
    {
        name: "О нас",
        ids: ["why-we-section", "last-section"],
    },
]

export const Header = () => {
    const {activeSection} = useBearStore()
    const [activeMenu, setActiveMenu] = useState(false)

    return (
        <>
            <header className="header">
                <Link href="/" className="logo">
                    <Bulb/>
                    Кредитный Гений
                </Link>
                <div className="header__content">
                    <ul className="header__nav">
                        {links.map((item, index) => {
                            const isActive = item.ids.includes(activeSection)

                            return <LinkItem item={item} isActive={isActive} key={index}/>
                        })}
                    </ul>
                    <a className="header__contact-number" href={`tel:+79182895555`}>+7 (918) 289-55-55</a>
                    <div className="burger" onClick={() => setActiveMenu(true)}>
                        <Burger/>
                    </div>
                </div>
            </header>
            <>
                <div onClick={() => setActiveMenu(false)} className={`overlay ${activeMenu ? "burger-active" : ""}`}/>
                <div className={`burger-menu ${activeMenu ? "burger-active" : ""}`}>
                    <div onClick={() => setActiveMenu(false)} className="burger-menu-header">
                        <Cross />
                    </div>
                    <ul className="burger-menu-ul">
                        {links.map((item, index) => {
                            const isActive = item.ids.includes(activeSection)

                            return <LinkItem item={item} isActive={isActive} key={index}/>
                        })}
                    </ul>
                    <a className="burger-menu-number" href={`tel:+79182895555`}>+7 (918) 289-55-55</a>
                </div>
            </>
        </>
    )
}