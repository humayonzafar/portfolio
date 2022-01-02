const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default async function handler(req, res) {
    try {
        const body = JSON.parse(req.body);
        const message =
            `Name: ${body.name}\r\n
             Email: ${body.email}\r\n
             Message: ${body.contact_message}\r\n`;
        const data = {
            to: process.env.PRIMARY_EMAIL,
            from: process.env.SUPPORT_EMAIL,
            subject: 'Contact Form Message',
            text: message,
            html: message.replace(/\r\n/g, '<br>')
        };
        await mail.send(data);
        res.status(200).json({status: 'Ok'})
    } catch (err) {
        console.log(err);
    }
}
