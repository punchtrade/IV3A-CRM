const express = require('express');
const router = express.Router();
const clientsSchema = require('../schema/clients');
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
} = require('../controllers/search');

router.get('/search', getAll);
router.post('/search', validate(clientsSchema), createOne);
router.put('/search/:_id', validate(clientsSchema), updateOne);
router.put('/search/assignUser/:_id', assignUser);
router.put('/search/removeUser/:_id', removeUser);
router.put('/search/assignCar/:_id', assignCar);
router.put('/search/removeCar/:_id', removeCar);
router.delete('/search/:_id', deleteOne);

module.exports = router;