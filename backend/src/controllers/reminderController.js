const {
    mongo: { reminderModel },
  } = require('../../database/index');

exports.newReminder = async (req, res, next) => {
    const reminder = new reminderModel(req.body);
    try {
        await reminder.save();
        res.json({message : 'Se agregó un nuevo recordatorio'});
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra todos los reminders
exports.viewAllReminder = async (req, res, next) => {
    try {
        const reminder = await reminderModel.find({}).populate('user').populate({
            path: 'reminder.user',
            model: 'reminder'
        });

        res.json(reminder);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Muestra un reminder por su ID
exports.viewReminder = async (req, res, next) => {
    const reminder = await reminderModel.findById(req.params.idReminder).populate('client').populate({
        path: 'reminder.user',
        model: 'reminder'
    })

    if(!reminder) {
        res.json({message : 'Ese  recordatorio no existe'});
        return next();
    }

    // mostrar el reminder
    res.json(reminder);
}

// Actualizar el reminder via ID
exports.updateReminder = async (req, res, next) => {
    try {
        let reminder = await reminderModel.findOneAndUpdate({_id : req.params.idReminder}, req.body, {
            new: true
        } )
        .populate('user')
        .populate({
            path: 'reminder.user',
            model: 'reminder'
        });

        res.json(reminder)
    } catch (error) {
        console.log(error);
        next();
    }
}

// elimina un reminder por su id
exports.deleteReminder = async (req, res, next) => {
    try {
        await reminderModel.findOneAndDelete({ _id : req.params.idReminder});
        res.json({ message : 'El recordatorio se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}