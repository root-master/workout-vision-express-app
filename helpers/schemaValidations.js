const Joi = require("joi");

exports.movementSchemaValidation = () => {
  return Joi.object({
    movementName: Joi.string().min(4).required(),
    movementDisplayName: Joi.string().min(4).required(),
    videoUrl: Joi.string().required(),
    videoStartTime: Joi.number().required(),
    videoEndTime: Joi.number().required(),
    videoSource: Joi.string().required(),
    equipmentList: Joi.array().items(Joi.string()).required(),
    workoutCategoryList: Joi.array().items(Joi.string()).required(),
  });
};
