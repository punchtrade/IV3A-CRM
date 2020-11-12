const {
    mongo: { schedulerModel },
  } = require('../../database/index');

exports.newScheduler = async (req, res, next) => {
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
exports.viewAllScheduler = async (req, res, next) => {
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
exports.viewScheduler = async (req, res, next) => {
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
exports.updateScheduler = async (req, res, next) => {
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
exports.deleteScheduler = async (req, res, next) => {
    try {
        await schedulerModel.findOneAndDelete({ _id : req.params.idScheduler});
        res.json({ message : 'El recordatorio  del calendario se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}