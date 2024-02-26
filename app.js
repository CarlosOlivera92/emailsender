import express from 'express';

const PORT = 8080;
const app = express();


//Configuracion de Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use('api/emailsender');

const server = app.listen(PORT, () => {
    console.log(`Application running. Listening on port: ${PORT}`)
})