import configs from '../configs/configs.js';
import { transporter } from '../utils/utils.js';

const sendEmail = async(userOptions) => {
    try {
        const subject = 'Consulta Realizada desde el sitio de Sofexs';
        const message = userOptions.message;
        const mailOptions = {
            from: userOptions.email , // Dirección de correo electrónico de tu cuenta
            to: configs.googleUsername, // Dirección de correo electrónico de destino (tu dirección de correo electrónico)
            subject: subject,
            text: `Remitente:`
        };
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo electrónico enviado:', info);
        return info;
    } catch ( error ) {
        console.error('Error al enviar el correo electrónico:', error);
        throw error;
    }
}
export default sendEmail;
