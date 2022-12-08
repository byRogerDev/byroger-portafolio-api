import express from 'express';
import * as personalService from '../../services/personalService';

const router = express.Router();
// byroger.ProfesionalProjectGalleryItems.idProfesionalProject
router.get('', async (_, res) => {
    const techs = await personalService.getEntries();
    res.send(techs);
});

router.get('/:id', async (req, res) => {

    console.log("router");
    const tec = await personalService.findById(parseInt(req.params.id))

    if(!tec) return res.status(404).send("Personal no encontrada");
    else res.send(tec);
});

export default router;