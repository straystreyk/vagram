import nodemailer from "nodemailer"
import {NextResponse} from "next/server";


const pass = "0iWphUFykeqSRAjakHTW"


export async function POST(req:Request) {
    try {
        const body = await req.json()

        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'tigran93931@mail.ru',
                pass
            }
        })

        const mailOptions = {
            from: 'tigran93931@mail.ru',
            to: "tigran93931@mail.ru",
            subject: 'Заявка с сайта Кредитный Гений',
            text: `
              Оставили заявку:
              Имя: ${body?.name || ""} 
              Номер телефона: ${body.phone}
        `
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({ status: "success" })
    } catch (e) {
        return NextResponse.json({ status: "failed" })
    }



}