const Joi = require('@hapi/joi');

const schema = Joi.object({
  id: Joi.string().required(),
  ClientId: Joi.string().required(),
  StartTime: Joi.number().required(),
  EndTime: Joi.number().required(),
  IsAllDay: Joi.string().required(),
  Description: Joi.number().required(),
  DepartmentID: Joi.number().required(),
  ConsultantID: Joi.number().required(),
});

module.exports = schema;