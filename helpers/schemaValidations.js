const Joi = require("joi");

exports.movementSchemaValidation = () => {
  return Joi.object({
    movementName: Joi.string().allow("", null),
    videoUrl: Joi.string().allow("", null),
    videoStartTime: Joi.number().allow("", null),
    videoEndTime: Joi.number().allow("", null),
    videoSource: Joi.string().allow("", null),
    equipmentList: Joi.array().items(Joi.string()).allow("", null),
    workoutCategoryList: Joi.array().items(Joi.string()).allow("", null),
  });
};
