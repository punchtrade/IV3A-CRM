const express = require('express');
const router = express.Router();
const uploadsSchema = require('../schema/uploads');
const validate = require('../middlewares/validateData');
const {
  createOne,
  deleteOne,
  getAll,
  updateOne,
  assignClient,
  removeClient,
} = require('../controllers/uploads');

router.get('/uploads', getAll);
router.post('/uploads', validate(uploadsSchema), createOne);
router.put('/uploads/:_id', validate(uploadsSchema), updateOne);
router.put('/uploads/assignClient/:_id', assignClient);
router.put('/uploads/removeClient/:_id', removeClient);
router.delete('/uploads/:_id', deleteOne);

module.exports = router;