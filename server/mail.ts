import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

type MailData = {
	name: string
	email: string
	company?: string
	role?: string
	message?: string
}

export async function sendMail({
	name,
	email,
	company,
	role,
	message,
}: MailData) {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: parseInt(process.env.SMTP_PORT || '587'),
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS,
		},
	})

	const fromEmail = `"Aurorix AI" <${process.env.SMTP_USER}>`

	const mailOptions = {
		from: fromEmail,
		to: process.env.RECEIVER_EMAIL,
		subject: `📥 Новая заявка от ${name}`,
		text: `
Имя: ${name}
Email: ${email}
Компания: ${company || '-'}
Роль: ${role || '-'}
Сообщение:
${message || '-'}
    `,
	}

	try {
		console.log('📤 Отправка письма:', {
			to: mailOptions.to,
			from: mailOptions.from,
		})

		const info = await transporter.sendMail(mailOptions)
		console.log('✅ Письмо отправлено:', info.messageId)
	} catch (error) {
		console.error('❌ Ошибка при отправке:', error)
	}
}
