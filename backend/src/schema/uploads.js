const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  clients: Joi.number().required(),
});

module.exports = schema;