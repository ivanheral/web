import type { NextApiRequest, NextApiResponse } from 'next'
import { render } from '@react-email/render'
import nodemailer from 'nodemailer'

import TemplateEmail from '../../../emails/TemplateEmail'

type EmailPayload = {
  from: string
  to: string
  subject: string
  html: string
}

export const sendEmail = async (data: EmailPayload, res: NextApiResponse) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  transporter.sendMail(data, function (error) {
    return res.status(200).json({ message: !error })
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await sendEmail(
    {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: 'consulta WEB',
      html: render(TemplateEmail(req.body.mail, req.body.body)),
    },
    res,
  )
}
