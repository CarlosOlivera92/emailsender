import nodemailer from 'nodemailer';
import configs from '../configs/configs.js';
const user = configs.googleUsername;
const pass = configs.googleApiKey;
console.log(user)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `olivera.carlos1999@gmail.com`,
        pass: `vigx cwho aiov vxms`,
    }
});

export {
    transporter
}