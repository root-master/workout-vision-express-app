const Joi = require("joi");

exports.movementSchemaValidation = () => {
  return Joi.object({
    movement_name: Joi.string().min(4).required(),
    movement_display_name: Joi.string().min(4).required(),
    video_url: Joi.string().required(),
    video_start_time: Joi.number().required(),
    video_end_time: Joi.number().required(),
    video_source: Joi.string().required(),
    equipment_list: Joi.array().items(Joi.string()).required(),
    workout_category_list: Joi.array().items(Joi.string()).required(),
  });
};
