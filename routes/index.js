import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {//req: request, res: response
    res.render('inicio');
});

router.get('/nosotros', (req, res) => {//req: request, res: response
    const viajes = 'Viaje a Alemania';
    res.render('nosotros');
});

export default router;