import nodemailer from "nodemailer";

const transporterConfiguration = {
    service: "gmail",
    host: process.env.EMAIL_SMTP_HOST,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
};

const transporter = nodemailer.createTransport(transporterConfiguration);

async function send(text) {
    const mailOptions = {
        from: {
            name: "Mistic Protection",
            address: "zstoresuport@gmail.com",
        },
        to: process.env.PRIVATE_EMAIL,
        subject: "Contato - Portfólio",
        text: text,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw new Error();
    }
}

export default {
    send,
};
