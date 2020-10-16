const Joi = require('@hapi/joi');

const schema = Joi.object({
  id: Joi.string().required(),
  date: Joi.string().required(),
  dueDate: Joi.number().required(),
  select: Joi.number().required(),
  text: Joi.number().required(),
});

module.exports = schema;