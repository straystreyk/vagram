import '../styles/globals.css'
import {Header} from "@/components/header";
import {Footer} from "@/components/footer";
import {Toaster} from 'sonner'


export default function RootLayout({
                                       children,
                                       kek,
                                   }: {
    children: React.ReactNode
    kek?: boolean
}) {
    return (
        <html lang="en">
        <link rel="icon" href="/favicon.svg" sizes="any"/>
        <body>
        <Toaster richColors position="top-center"/>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
}
