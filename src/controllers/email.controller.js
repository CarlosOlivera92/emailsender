import sendEmail from "../services/email.service.js";

class EmailSenderController {
    constructor() {
        this.sendEmail = this.sendEmail.bind(this)
    }
    async sendEmail(req, res) {
        try {
            const { userEmail, userName, userPhone, userBusiness, userMessage } = req.body;

            // Validar que los campos obligatorios estén presentes y sean de tipo string
            if (!userName || !userEmail || !userMessage || typeof userName !== 'string' || typeof userEmail !== 'string' || typeof userMessage !== 'string') {
                res.status(400).send({ status: 'Error', message: 'Uno o más campos obligatorios están faltando o no son del tipo correcto' });
                return; 
            }

            // Validar que el teléfono sea de tipo numérico si está presente
            if (userPhone && isNaN(userPhone)) {
                res.status(400).send({ status: 'Error', message: 'El campo de teléfono debe ser un número' });
                return; 
            }

            // Crear el objeto de opciones para enviar el correo
            const userOptions = {
                email: userEmail,
                username: userName,
                phoneNumber: userPhone || "none", // Usar "none" si el teléfono no está presente
                business: userBusiness || "none", // Usar "none" si la empresa no está presente
                message: userMessage,
            };

            // Enviar el correo
            const emailService = await sendEmail(userOptions);

            // Responder con éxito
            res.status(200).send({ status: 'success', message: 'Correo enviado exitosamente' });

        } catch (error) {
            console.error(error);
            res.status(500).send({ status: 'Error', message: 'Ocurrió un error al enviar el correo' });
        }
    }
}

export default EmailSenderController;
