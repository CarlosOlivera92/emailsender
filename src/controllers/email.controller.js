import sendEmail from "../services/email.service.js";

class EmailSenderController {
    constructor() {
        this.sendEmail = this.sendEmail.bind(this)
    }
    async sendEmail(req, res) {
        try {
            const {userEmail, userName, userPhone, userBusiness, userMessage} = req.body;
            const userOptions = {
                email: userEmail,
                username: userName,
                phoneNumber: userPhone | "none",
                business : userBusiness | "none",
                message : userMessage,
            }
            const emailService  = await sendEmail(userOptions);
            console.log(emailService)
            res.status(200).send({ status: 'success', message: 'Correo enviado exitosamente' });

        } catch (error) {
            throw new Error( error );
        }
    }
}
export default EmailSenderController;