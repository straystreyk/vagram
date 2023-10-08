import {Container} from "@/components/container";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <div className="footer__content">
                    © Все права Защищены. Кредитный Гений
                    <Link target="_blank" href="/policy/">
                        Политика конфиденциальности
                    </Link>
                </div>
            </Container>
        </footer>
    )
}