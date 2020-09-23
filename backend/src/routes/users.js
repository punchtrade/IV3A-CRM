const express = require('express');
const router = express.Router();
const usersSchema = require('../schema/users');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignClient,
  removeClient,
  assignCar,
  removeCar,
} = require('../controllers/users');

router.get('/users', getAll);
router.post('/users', validate(usersSchema), createOne);
router.put('/users/:_id', validate(usersSchema), updateOne);
router.put('/users/assignClient/:_id', assignClient);
router.put('/users/removeClient/:_id', removeClient);
router.put('/users/assignCar/:_id', assignCar);
router.put('/users/removeCar/:_id', removeCar);
router.delete('/users/:_id', deleteOne);

module.exports = router;