import nodemailer from 'nodemailer';
import configs from '../configs/configs.js';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'carlosoliveraggw@gmail.com',
      pass: configs.googleApiKey
    }
});
export {
    transporter
}