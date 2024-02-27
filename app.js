import express from 'express';
import EmailSenderRouter from './src/routes/mailsender.router.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = 8080;
const app = express();

const emailSenderRouter = new EmailSenderRouter();

//Configuracion de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Definicion de rutas
app.use('/api/emailsender', emailSenderRouter.getRouter());

const server = app.listen(PORT, () => {
    console.log(`Application running. Listening on port: ${PORT}`)
})