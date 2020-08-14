import nodemailer from 'nodemailer'

const smtpTranspor = nodemailer.createTransport({
    host: "mail.municipia.com.mx",
    port:465,
    secure: true,
    auth: {
        user: "hola@municipia.com.mx",
        password: "holamunicipia1."
    }
})

export default smtpTranspor