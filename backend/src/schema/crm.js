const Joi = require('@hapi/joi');

const schema = Joi.object({
  name: Joi.string().required(),
  date: Joi.string().required(),
  dueDate: Joi.number().required(),
  select: Joi.number().required(),
  description: Joi.number().required(),
});

module.exports = schema;