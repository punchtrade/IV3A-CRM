const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const {
    mongo: { leadsModel },
} = require('../../database/index');

//leads
router.get('/leads', (req, res) => {
    console.info('obtener datos clientes');
    leadsModel.find()
      .populate('Leads', 'leadsSchema')
      .exec((err, leads) => {
        if (err) {
          console.error(err.message);
          return res.status(500).json({ error: err.message });
        }
        return res.status(200).json(leads);
      });
  });
  router.post('/clients', (req, res, next) => {
    leadsModel.updateOne(req.params.id, req.body, function (err, result) {
      if (err) return next(err);
      res.status(200).json(result);
      console.log(req.body);
    });
  });
  router.delete('/leads', (req, res, next) => {
    leadsModel.findOneAndDelete(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  module.exports = router;