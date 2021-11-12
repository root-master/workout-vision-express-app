const Joi = require("joi");

exports.sessionSchemaValidation = () => {
  return Joi.object({
    sessionName: Joi.string().allow("", null),
    sessionEventList: Joi.array().items(Joi.object()).allow("", null),
  });
};
