const Joi = require("joi");

exports.WorkoutSessionSchemaValidation = () => {
  return Joi.object({
    meta_data: Joi.object().allow("", null),
    program: Joi.object().allow("", null),
    user: Joi.object().allow("", null),
    private: Joi.boolean().allow("", null),
    workouts: Joi.array().allow("", null),
  });
};

