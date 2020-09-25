// const express = require('express');
// const router = express.Router();
// const clientsSchema = require('../schema/clients');
// const validate = require('../middlewares/validateData');
// const {
//   createOne,
//   deleteOne,
//   getAll,
//   updateOne,
//   assignUser,
//   removeUser,
//   assignCar,
//   removeCar,
// } = require('../controllers/clients');

// router.get('/clients', getAll);
// router.post('/clients', validate(clientsSchema), createOne);
// router.put('/clients/:_id', validate(clientsSchema), updateOne);
// router.put('/clients/assignUser/:_id', assignUser);
// router.put('/clients/removeUser/:_id', removeUser);
// router.put('/clients/assignCar/:_id', assignCar);
// router.put('/clients/removeCar/:_id', removeCar);
// router.delete('/clients/:_id', deleteOne);

// module.exports = router;