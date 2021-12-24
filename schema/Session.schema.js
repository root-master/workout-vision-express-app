const { Schema, model } = require("mongoose");

const video = {  // form
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number
}

const movement = {  // form -- This already exists with video fields
  movementName: String,
  equipmentList: Array(String),
  workoutCategoryList: Array(String),
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number
}

const sessionMetadata = {  // form
  sessionName: String,
  workoutCategoryList: Array(String),
  contentOwner: String,
}

const podMetadata = {  // form
  podName: String,
  workoutCategoryList: Array(String),
}

const roundsGoals = {  // form
  roundsNmber: Number,
  roundsGoalType: String,
  timeGoalType: String,
  timePerRound: Number,
  roundsTotalTime: Number,
  timeUnit: String,
  useDifferentRepsPerRound: Boolean,
  restTimeBetweenRounds: Number,
}

const setsGoals = {  // form
  setsNumber: Number,
  setsGoalType: String,
  timeGoalType: String,
  timePerSet: Number,
  setsTotalTime: Number,
  timeUnit: String,
  useDifferentRepsPerSet: Boolean,
  restTimeBetweenSets: Number,
}

const repsGoals = {  // form
  repsNumber: Number,
  repsPerSetArray: Array(Number),
  repsPerRoundArray: Array(Number),
}

const cardioGoals = {  // form
  targetEnergyMeasure: Number,
  energyUnit: String,
  targetEnergyPerSetArray: Array(Number),
  targetEnergyPerRoundArray: Array(Number),
}

const weightGoals = {  // form
  targetWeightMeasure: Number,
  weightUnit: String,
  targetWeightPerSetArray: Array(Number),
  targetWeightPerRoundArray: Array(Number),
}

const intensityGoals = {  // form
  targetIntensityMeasure: Number,
  targetIntensityPerSetArray: Array(Number),
  targetIntensityPerRoundArray: Array(Number),
}

const targetGoals = {  // form
  roundsGoals: roundsGoals,
  setsGoals: setsGoals,
  repsGoals: repsGoals,
  cardioGoals: cardioGoals,
  weightGoals: weightGoals,
  intensityGoals: intensityGoals,
}

const action = {  // form
  playVideo: Boolean,
  streamUserVideo: Boolean,
}

const roundEntry = {
  roundEntryType: String,  // movement, video
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const podEntry = {
  podEntryType: String,  // round, movement, video
  round: Array(roundEntry),
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const sessionEntry = {
  sessionEntryType: String,  // pod, round, movement, video
  pod: Array(podEntry),
  podMetadata: podMetadata,
  round: Array(roundEntry),
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const session = {
  sessionMetadata: sessionMetadata,
  sessionEntryList: Array(sessionEntry)
}

const SessionSchema = new Schema(
  session,
  { timestamps: true }
);

const Session = model("session", SessionSchema);

module.exports = Session;
