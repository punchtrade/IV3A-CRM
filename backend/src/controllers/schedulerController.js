const express = require("express");
const router = express.Router();
const {
    mongo: { schedulerModel },
  } = require('../../database/index');

router.post('/scheduler/new/:idUser'), async (req, res, next) => {
    const scheduler = new schedulerModel(req.body);
    try {
        await scheduler.save();
        res.json({message : 'Se agregó un nuevo recordatorio al calendario'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los scheduler reminders
router.get('/scheduler'), async (req, res, next) => {
    try {
        const scheduler = await schedulerModel.find({}).populate('user').populate({
            path: 'scheduler.user',
            model: 'scheduler'
        });

        res.json(scheduler);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un scheduler reminder por su ID
router.get('/scheduler/:idScheduler'), async (req, res, next) => {
    const scheduler = await schedulerModel.findById(req.params.idScheduler).populate('client').populate({
        path: 'scheduler.user',
        model: 'scheduler'
    })

    if(!scheduler) {
        res.json({message : 'Ese  recordatorio del calendario no existe'});
        return next();
    }

    // mostrar el scheduler reminder
    res.json(scheduler);
}

// Actualizar el scheduler reminder via ID
router.put('/scheduler/:idScheduler'), async (req, res, next) => {
    try {
        let scheduler = await schedulerModel.findOneAndUpdate({_id : req.params.idScheduler}, req.body, {
            new: true
        } )
        .populate('user')
        .populate({
            path: 'scheduler.user',
            model: 'scheduler'
        });

        res.json(scheduler)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un scheduler reminder por su id
router.delete('/scheduler/:idScheduler'), async (req, res, next) => {
    try {
        await schedulerModel.findOneAndDelete({ _id : req.params.idScheduler});
        res.json({ message : 'El recordatorio  del calendario se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}
module.exports = router;