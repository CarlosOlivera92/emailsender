import nodemailer from 'nodemailer';
import configs from '../configs/configs.js';
const user = configs.googleUsername;
const pass = configs.googleApiKey;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: user,
        pass: pass,
    }
});

export {
    transporter
}