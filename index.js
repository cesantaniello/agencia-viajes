import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import bodyParser from 'body-parser';
import path from 'path'

import dotenv from 'dotenv';
dotenv.config({path:"variables.env"});

const app = express();

//Conectar la BB. DD.
db.authenticate()
    .then(() => console.log('BB. DD. conectada'))
    .catch(error => console.log(error))

//Habilitar PUG
app.set('view engine', 'pug');

//Obtener año actual
app.use((req,res,next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombresitio = "Agencia de viajes";
    next();
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Definir la carpeta publica
app.use(express.static('public'))

//Definir rutas
app.use('/', router);

/* Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log(`Server is running on port ${port}`);
});