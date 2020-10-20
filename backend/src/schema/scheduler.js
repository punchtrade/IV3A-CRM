const Joi = require('@hapi/joi');

const schema = Joi.object({
  id: Joi.string().required(),
  title: Joi.string().required(),
  roomId: Joi.number().required(),
  members: Joi.number().required(),
  startTime: Joi.number().required(),
  endTime: Joi.number().required(),
  subject: Joi.number().required(),
  description: Joi.number().required(),
  departmentData: Joi.number().required(),
  consultantData: Joi.number().required(),
});

module.exports = schema;