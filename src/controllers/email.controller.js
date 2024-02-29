import sendEmail from "../services/email.service.js";

class EmailSenderController {
    constructor() {
        this.sendEmail = this.sendEmail.bind(this)
    }

    async sendEmail(req, res) {
        try {
            const { userEmail, userName, userPhone, userBusiness, userMessage } = req.body;
            
            // Validar que los campos obligatorios no estén vacíos
            if (!userName || !userEmail || !userMessage) {
                res.status(400).send({ status: 'Error', message: 'Uno o más campos obligatorios están faltando' });
                return; // Detener la ejecución si faltan campos obligatorios
            }

            // Validar que los campos obligatorios no estén vacíos
            if (!userName || !userEmail || !userMessage) {
                res.status(400).send({ status: 'Error', message: 'Uno o más campos obligatorios están faltando' });
                return; // Detener la ejecución si faltan campos obligatorios
            }

            // Validar el tipo de datos de los campos
            if (typeof(userName)  !== 'string' || typeof(userEmail) !== 'string' || typeof(userMessage) !== 'string' || (userPhone && typeof(userPhone) !== 'number')) {
                res.status(400).send({ status: 'Error', message: 'Uno o más campos tienen un tipo de dato incorrecto' });
                return; // Detener la ejecución si algún campo tiene un tipo de dato incorrecto
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
