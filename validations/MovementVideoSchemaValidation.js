const Joi = require("joi");

exports.MovementVideoSchemaValidation = () => {
  return Joi.object({
    movement: Joi.object().allow("", null),
    video: Joi.object().allow("", null),
    user: Joi.object().allow("", null),
    private: Joi.boolean().allow("", null)
  });
};
