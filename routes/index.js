import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {//req: request, res: response
    res.send('Hello World');
});

router.get('/nosotros', (req, res) => {//req: request, res: response
    res.send('Nosotros');
});

router.get('/contacto', (req, res) => {//req: request, res: response
    res.send('Contacto');
});

export default router;