const Joi = require("joi");

const sessionMetadata = Joi.object({
  sessionName: Joi.string().allow("", null),
  workoutCategoryList: Joi.array().items(Joi.string()).allow("", null),
  contentOwner: Joi.string().allow("", null),
});

const podMetadata = Joi.object({
  podName: Joi.string().allow("", null),
  workoutCategoryList: Joi.array().items(Joi.string()).allow("", null),
});

const video = Joi.object({
  videoUrl: Joi.string().allow("", null),
  videoSource: Joi.string().allow("", null),
  videoStartTime: Joi.number().allow("", null),
  videoEndTime: Joi.number().allow("", null),
})

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

const action = Joi.object({
  playVideo: Joi.boolean().allow("", null),
  streamUserVideo: Joi.boolean().allow("", null),
});

const roundEntry = Joi.object({
  roundEntryType: Joi.string().allow("", null).min(3).valid("movement", "video"),  
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const podEntry = Joi.object({
  podEntryType: Joi.string().allow("", null).min(3).valid("movement", "round", "video"),  
  round: Joi.array().items(roundEntry).allow("", null),
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const sessionEntry = Joi.object({
  sessionEntryType: Joi.string().allow("", null).min(3).valid("pod", "movement", "round", "video"),  
  pod: Joi.array().items(podEntry).allow("", null),
  podMetadata: podMetadata.allow("", null),
  round: Joi.array().items(roundEntry).allow("", null),
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});


const SessionSchema =  Joi.object({
    sessionMetadata: sessionMetadata.allow("", null),
    sessionEntryList: Joi.array().items(sessionEntry).allow("", null),
});

exports.sessionSchemaValidation = () => {
  return SessionSchema
};
