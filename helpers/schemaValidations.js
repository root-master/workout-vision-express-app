const Joi = require("joi");

exports.movementSchemaValidation = () => {
  return Joi.object({
    movementName: Joi.string().optional(),
    videoUrl: Joi.string().optional(),
    videoStartTime: Joi.number().optional(),
    videoEndTime: Joi.number().optional(),
    videoSource: Joi.string().optional(),
    equipmentList: Joi.array().items(Joi.string()).optional(),
    workoutCategoryList: Joi.array().items(Joi.string()).optional(),
  });
};
