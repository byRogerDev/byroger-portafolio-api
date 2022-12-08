import express from 'express';
import * as profesionalService from '../../services/profesionalService';

const router = express.Router();

router.get('', async (_, res) => {
    const techs = await profesionalService.getEntries();
    res.send(techs);
});

router.get('/:id', async (req, res) => {

    console.log("router");
    const tec = await profesionalService.findById(parseInt(req.params.id))

    if(!tec) return res.status(404).send("Profesional no encontrada");
    else res.send(tec);
});

export default router;