const express = require("express");
const router = express.Router();
const joi = require("@hapi/joi");
const models = require("../models/clients");

router.post("/newClient", async (req, res) => {
    try { 
        const schema = joi.object.keys({
            id: joi.string().id().required(),
            treatment: joi.string().min(3).max(16).treatment().required(),
            firstName: joi.string().min(3).max(45).firstName().required(),
            lastName: joi.string().min(3).max(45).lastName().required(),
            telephone: joi.string().min(3).max(16).telephone().required(),
            email: joi.string().min(3).max(45).email().required(),
            address: joi.string().min(3).max(45).address().required(),
            city: joi.string().min(3).max(45).city().required(),
            province: joi.string().min(3).max(45).province().required(),
            postalCode: joi.string().min(3).max(16).postalCode().required(),
        });
        const result = schema.validate(req.body);
        if (result.error) {
            throw result.error.details[0].message;
        }
        let addClientResponse = await models.addClient(result.value);
        res.json(addClientResponse);
    } catch (e) {
        res.json({ error: true, message: e });
    }
});

router.get("/logout", (req, res) => {
    if (req.session.user) {
      req.session.destroy();
    }
    res.redirect("/");
  });

  
  module.exports = router;