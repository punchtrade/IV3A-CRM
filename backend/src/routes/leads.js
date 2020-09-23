const express = require('express');
const router = express.Router();
const leadsSchema = require('../schema/leads');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignUser,
  removeUser,
  assignCar,
  removeCar,
  assignClient,
  removeClient,
} = require('../controllers/leads');

router.get('/leads', getAll);
router.post('/leads', validate(leadsSchema), createOne);
router.put('/leads/:_id', validate(leadsSchema), updateOne);
router.put('/leads/assignUser/:_id', assignUser);
router.put('/leads/removeUser/:_id', removeUser);
router.put('/leads/assignCar/:_id', assignCar);
router.put('/leads/removeCar/:_id', removeCar);
router.put('/leads/assignClient/:_id', assignClient);
router.put('/leads/removeClient/:_id', removeClient);
router.delete('/leads/:_id', deleteOne);

module.exports = router;