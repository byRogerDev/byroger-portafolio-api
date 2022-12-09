import express, { NextFunction, Request, Response } from 'express';
import * as techService from '../../services/technologyService';

const router = express.Router();

router.get('', async (_req: Request, res: Response, _next: NextFunction)  => {
    try {
        const techs = await techService.getEntries();
        res.send(techs);
    }
    catch (error) {
        console.log(error);
    }
});

router.get('/:id', async (req, res) => {

    console.log("router");
    const tec = await techService.findById(parseInt(req.params.id))

    if(!tec) return res.status(404).send("Tecnologia no encontrada");
    else res.send(tec);
});

export default router;