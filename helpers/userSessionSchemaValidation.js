const Joi = require("joi");

const user = Joi.object({
    email: Joi.string().allow("", null),
    email_verified: Joi.boolean().allow("", null),
    family_name: Joi.string().allow("", null),
    given_name: Joi.string().allow("", null),
    locale: Joi.string().allow("", null),
    name: Joi.string().allow("", null),
    nickname: Joi.string().allow("", null),
    picture: Joi.string().allow("", null),
    sub: Joi.string().allow("", null),
    updated_at: Joi.string().allow("", null)
});

const userVideo = Joi.object({
    bucket: Joi.string().allow("", null),
    key: Joi.string().allow("", null)
});

const movement = Joi.object({
    movementName: Joi.string().allow("", null),
    equipmentList: Joi.array().items(Joi.string()).allow("", null),
    workoutCategoryList: Joi.array().items(Joi.string()).allow("", null),
    videoUrl: Joi.string().allow("", null),
    videoSource: Joi.string().allow("", null),
    videoStartTime: Joi.number().allow("", null),
    videoEndTime: Joi.number().allow("", null),
});

const roundsGoals = Joi.object({
    roundsNmber: Joi.number().allow("", null),
    roundsGoalType: Joi.string().allow("", null),
    timeGoalType: Joi.string().allow("", null),
    timePerRound: Joi.number().allow("", null),
    roundsTotalTime: Joi.number().allow("", null),
    timeUnit: Joi.string().allow("", null).valid("seconds", "minutes"),
    useDifferentRepsPerRound: Joi.boolean().allow("", null),
    restTimeBetweenRounds: Joi.number().allow("", null),
});

const setsGoals = Joi.object({
    setsNumber: Joi.number().allow("", null),
    setsGoalType: Joi.string().allow("", null),
    timeGoalType: Joi.string().allow("", null),
    timePerSet: Joi.number().allow("", null),
    setsTotalTime: Joi.number().allow("", null),
    timeUnit: Joi.string().allow("", null).valid("seconds", "minutes"),
    useDifferentRepsPerSet: Joi.boolean().allow("", null),
    restTimeBetweenSets: Joi.number().allow("", null),
});

const repsGoals = Joi.object({
    repsNumber: Joi.number().allow("", null),
    repsPerSetArray: Joi.array().items(Joi.number()).allow("", null),
    repsPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const cardioGoals = Joi.object({
    targetEnergyMeasure: Joi.number().allow("", null),
    energyUnit: Joi.string().allow("", null),
    targetEnergyPerSetArray: Joi.array().items(Joi.number()).allow("", null),
    targetEnergyPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const weightGoals = Joi.object({
    targetWeightMeasure: Joi.number().allow("", null),
    weightUnit: Joi.string().allow("", null),
    targetWeightPerSetArray: Joi.array().items(Joi.number()).allow("", null),
    targetWeightPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const intensityGoals = Joi.object({
    targetIntensityMeasure: Joi.number().allow("", null),
    targetIntensityPerSetArray: Joi.array().items(Joi.number()).allow("", null),
    targetIntensityPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const targetGoals = Joi.object({
    roundGoals: roundsGoals.allow("", null),
    setsGoals: setsGoals.allow("", null),
    repsGoals: repsGoals.allow("", null),
    cardioGoals: cardioGoals.allow("", null),
    weightGoals: weightGoals.allow("", null),
    intensityGoals: intensityGoals.allow("", null),
});

const sessionState = Joi.object({
    setNumber: Joi.number().allow("", null),
    roundNumber: Joi.number().allow("", null)
});

const userSessionSchema = Joi.object({
    movement: movement.allow("", null),
    user: user.allow("", null),
    user_video: userVideo.allow("", null),
    user_looper_session_id: Joi.string().allow("", null),  // unique to the looper run
    session_id: Joi.string().allow("", null),  // workout session ID if the session id launched from /sessions 
    timestamp_start: Joi.number().allow("", null),
    timestamp_end: Joi.number().allow("", null),
    target_goals: targetGoals.allow("", null),
    session_state: sessionState.allow("", null)
});

exports.userSessionSchemaValidation = () => {
    return userSessionSchema
};
