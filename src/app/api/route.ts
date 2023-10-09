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
            text: `
              Оставили заявку:
              ${body?.name ? `Имя: ${body.name}` : ""} 
              Номер телефона: ${body.phone}
        `
        }

        await transporter.sendMail(mailOptions)
        return NextResponse.json({status: "success"})
    } catch (e) {
        return NextResponse.json({status: "failed"})
    }


}