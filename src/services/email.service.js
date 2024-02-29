import configs from '../configs/configs.js';
import { transporter } from '../utils/utils.js';

const sendEmail = async(userOptions) => {
    try {
        const subject = 'Consulta Realizada desde el sitio de Sofexs';
        const message = userOptions.message;
        const html = `
            <p>Remitente: ${userOptions.username}</p>
            <p>Correo electrónico: ${userOptions.email}</p>
            <p>Teléfono: ${userOptions.phoneNumber}</p>
            <p>Empresa: ${userOptions.business}</p>
            <p>Mensaje: ${message}</p>
        `;

        // Configurar las opciones del correo electrónico
        const mailOptions = {
            from: userOptions.email,
            to: configs.googleUsername,
            subject: subject,
            html: html, // Usar el HTML personalizado en lugar del texto plano
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
