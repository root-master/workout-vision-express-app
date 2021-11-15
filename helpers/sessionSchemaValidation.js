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
});

const roundGoals = Joi.object({
  roundsNmber: Joi.number().allow("", null),
  roundGoalType: Joi.string().allow("", null),
  timeGoalType: Joi.string().allow("", null),
  timePerRound: Joi.number().allow("", null),
  roundsTotalTime: Joi.number().allow("", null),
  useDifferentRepsPerRound: Joi.boolean().allow("", null),
  restTimeBetweenRounds: Joi.number().allow("", null),
});

const setGoals = Joi.object({
  setsNumber: Joi.number().allow("", null),
  setsGoalType: Joi.string().allow("", null),
  timeGoalType: Joi.string().allow("", null),
  timePerSet: Joi.number().allow("", null),
  setsTotalTime: Joi.number().allow("", null),
  useDifferentRepsPerSet: Joi.boolean().allow("", null),
  restTimeBetweenSets: Joi.number().allow("", null),
});

const repGoals = Joi.object({
  repsNumber: Joi.number().allow("", null),
  repsPerSetArray: Joi.array().items(Joi.number()).allow("", null),
  repsPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const cardioGoals = Joi.object({
  targetEnergyGoalType: Joi.string().allow("", null),
  targetEnergyMeasure: Joi.number().allow("", null),
  energyUnit: Joi.string().allow("", null),
  targetEnergyPerSetArray: Joi.array().items(Joi.number()).allow("", null),
  targetEnergyPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const weightGoals = Joi.object({
  targetWeightGoalType: Joi.string().allow("", null),
  targetWeightMeasure: Joi.number().allow("", null),
  weightUnit: Joi.string().allow("", null),
  targetWeightPerSetArray: Joi.array().items(Joi.number()).allow("", null),
  targetWeightPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const intensityGoals = Joi.object({
  targetIntensityGoalType: Joi.string().allow("", null),
  targetIntensityMeasure: Joi.number().allow("", null),
  weightUnit: Joi.string().allow("", null),
  targetIntensityPerSetArray: Joi.array().items(Joi.number()).allow("", null),
  targetIntensityPerRoundArray: Joi.array().items(Joi.number()).allow("", null),
});

const targetGoals = Joi.object({
  roundGoals: roundGoals.allow("", null),
  setGoals: setGoals.allow("", null),
  repGoals: repGoals.allow("", null),
  cardioGoals: cardioGoals.allow("", null),
  weightGoals: weightGoals.allow("", null),
  targetIntensity: intensityGoals.allow("", null),
});

const action = Joi.object({
  showDemoVideo: Joi.boolean().allow("", null),
  videoRecording: Joi.boolean().allow("", null),
  pauseAtStart: Joi.boolean().allow("", null),
  pauseAtEnd: Joi.boolean().allow("", null),
  restTime: Joi.number().allow("", null),
});

const roundEntry = Joi.object({
  // entryType should be one of these: roundStart, movement, roundEnd
  entryType: Joi.string().allow("", null).min(3).valid("roundStart", "movement", "roundEnd"),  
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const podEntry = Joi.object({
  // entryType should be one of these: podStart OR round OR movement OR podEnd
  entryType: Joi.string().allow("", null).min(3).valid("podStart", "movement", "round", "podEnd"),  
  round: Joi.array().items(roundEntry).allow("", null),
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const sessionEntry = Joi.object({
  // entryType should be one of these: pod OR round OR movement
  entryType: Joi.string().allow("", null).min(3).valid("pod", "movement", "round"),  
  pod: Joi.array().items(podEntry).allow("", null),
  podMetadata: podMetadata.allow("", null),
  round: Joi.array().items(roundEntry).allow("", null),
  movement: movement.allow("", null),
  targetGoals: targetGoals.allow("", null),
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const sessionStart = Joi.object({
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});

const sessionEnd = Joi.object({
  video: video.allow("", null),
  action: action.allow("", null),
  comment: Joi.string().allow("", null),
});


const SessionSchema =  Joi.object({
    sessionMetadata: sessionMetadata.allow("", null),
    sessionStart: sessionStart.allow("", null),
    sessionEntryList: Joi.array().items(sessionEntry).allow("", null),
    sessionEnd: sessionEnd.allow("", null),
});

exports.sessionSchemaValidation = () => {
  return SessionSchema
};
