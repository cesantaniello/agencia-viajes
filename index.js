import express from 'express';
import router from './routes/index.js';

const app = express();


//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Definir rutas
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});