import express from 'express';
import * as hobbiesService from '../../services/hobbyService';

const router = express.Router();

router.get('', async (_, res) => {
    const techs = await hobbiesService.getEntries();
    res.send(techs);
});

router.get('/:id', async (req, res) => {

    console.log("router");
    const tec = await hobbiesService.findById(parseInt(req.params.id))

    if(!tec) return res.status(404).send("Profesional no encontrada");
    else res.send(tec);
});

export default router;