const Joi = require('@hapi/joi');

const schema = Joi.object({
  serialNumber: Joi.string().required(),
});

module.exports = schema;