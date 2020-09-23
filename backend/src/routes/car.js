const express = require('express');
const router = express.Router();
const carSchema = require('../schema/car');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignClient,
  removeClient,
} = require('../controllers/car');

router.get('/car', getAll);
router.post('/car', validate(carSchema), createOne);
router.put('/car/:_id', validate(carSchema), updateOne);
router.put('/car/assignClient/:_id', assignClient);
router.put('/car/removeClient/:_id', removeClient);
router.delete('/car/:_id', deleteOne);

module.exports = router;