import express from 'express';

const app = express();


//Definir puerto

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {//req: request, res: response
    res.send('Hello World');
});

app.get('/nosotros', (req, res) => {//req: request, res: response
    res.send('Nosotros');
});

app.get('/contacto', (req, res) => {//req: request, res: response
    res.send('Contacto');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});