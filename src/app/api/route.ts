import nodemailer from "nodemailer"
import {NextResponse} from "next/server";


const pass = "UbVWkAzZrTpeLHrKeVP0"
const user = "creditgenius@mail.ru"


export async function POST(req: Request) {
    try {
        const body = await req.json()

        const transporter = nodemailer.createTransport({
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user,
                pass
            }
        })

        const mailOptions = {
            from: user,
            to: user,
            subject: 'Заявка с сайта Кредитный Гений',
            html: `
              <h1>Оставили заявку:</h1>
              <div>${body?.name ? `Имя: ${body.name}` : ""}</div>
              Номер телефона: <a href="tel:${body.phone}">${body.phone}</a>
             `
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({status: "success"})
    } catch (e) {
        return NextResponse.json({status: "failed"})
    }


}