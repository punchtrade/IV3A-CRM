const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const {
    mongo: { schedulerModel },
} = require('../../database/index');


router.post('/scheduler/new', (req, res) => {
    console.log(req.body);
    schedulerModel.find({ id: req.body.id })
    .exec()
    .then((scheduler) => {
        if (scheduler.length >= 1) {
            return res.status(409).json({
                message: "Appointment already exist",
            });
        } else {
            const scheduler = new schedulerModel({
                _id: new mongoose.Types.ObjectId(),
                        id: req.body.id,
                        clientId: req.body.clientId,
                        startTime: req.body.startTime,
                        endTime: req.body.endTime,
                        isAllDay: req.body.isAllDay,
                        description: req.body.description,
                        departmentID: req.body.departmentID,
                        consultantID: req.body.consultantID,
            });
        scheduler.save()
            .then((result) => {
                console.log(result);
                res.status(201).json({
                    message: "Appointment created",
                });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    error: err,
                });
            });
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(422).json({
            error: err,
        });
    });
});

// Muestra todos los scheduler reminders
router.get('/scheduler', (req, res) => {
    console.info('obtener datos Crm');
    schedulerModel.find()
      .populate('Scheduler', 'schedulerSchema')
      .exec((err, scheduler) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(scheduler);
      });
  });

// Muestra un scheduler reminder por su ID
router.get('/scheduler/id', async (req, res, next) => {
    console.log('obtener datos de un appointment');
    const scheduler = await schedulerModel.findById({_id: req.body._id})
    .populate('Scheduler', 'schedulerSchema')
    .populate('User', 'usersSchema' )

    if (!scheduler) {
        res.json({ message: 'Ese  recordatorio del calendario no existe' });
        return next();
    }

    // mostrar el scheduler reminder
    res.json(scheduler);
});

// Update scheduler reminder by ID
router.put('/scheduler/modificated', (req, res) => {
    schedulerModel.findByIdAndUpdate(req.params.id, req.body)
    const scheduler = new schedulerModel({
        _id: new mongoose.Types.ObjectId(),
                id: req.body.id,
                clientId: req.body.clientId,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                isAllDay: req.body.isAllDay,
                description: req.body.description,
                departmentID: req.body.departmentID,
                consultantID: req.body.consultantID,
    });
    scheduler.save()
     .then(scheduler => res.json({ msg: 'Updated successfully' }))
     .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
     );
   });

// elimina un scheduler reminder por su id
router.delete('/scheduler/:idScheduler'), async (req, res, next) => {
    try {
        await schedulerModel.findOneAndDelete({ _id: req.params.idScheduler });
        res.json({ message: 'El recordatorio  del calendario se ha eliminado' });
    } catch (error) {
        console.log(error);
        next();
    }
}
module.exports = router;