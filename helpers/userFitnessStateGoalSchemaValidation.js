const Joi = require("joi");

const userFitnessStateGoalSchema = Joi.object({
    user: Joi.object().allow("", null),
    body_physical_measurement: Joi.object().allow("", null),
    weight_goals: Joi.object().allow("", null),
    current_fitness_level: Joi.object().allow("", null),
    target_fitness_goals_level: Joi.object().allow("", null),
    current_pain_level: Joi.object().allow("", null),
    current_strength_level: Joi.object().allow("", null),
    target_strength_level: Joi.object().allow("", null),
    current_mobility_level: Joi.object().allow("", null),
    target_mobility_level: Joi.object().allow("", null),
    current_activity: Joi.object().allow("", null),
    target_activity: Joi.object().allow("", null),
    available_equipments: Joi.object().allow("", null),
});

exports.userFitnessStateGoalSchemaValidation = () => {
    return userFitnessStateGoalSchema
};
