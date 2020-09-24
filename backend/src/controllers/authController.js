const { Router, response } = require("express");
const router = Router();
const mongoose = require("mongoose");
const config = require("../../configs/index");
const pdfTemplate = require('../../documents');
const pdf = require('html-pdf');

//invoice
router.post('/create-pdf', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

router.get('/fetch-pdf', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`)
})

//contract
router.post('/create-pdf2', (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf2', (err) => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

router.get('/fetch-pdf2', (req, res) => {
  res.sendFile(`${__dirname}/result.pdf2`)
})

module.exports = router;
