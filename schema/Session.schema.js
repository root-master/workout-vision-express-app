const { Schema, model } = require("mongoose");

const video = {  // form
  // videoName: String,
  // videoOwner: String,
  // personInVideo: String,
  // personType: String,
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number
}

const movement = {  // form -- This already exists with video fields
  movementName: String,
  equipmentList: Array(String),
  workoutCategoryList: Array(String),
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

const roundGoals = {  // form
  roundsNmber: Number,
  roundGoalType: String,
  timeGoalType: String,
  timePerRound: Number,
  roundsTotalTime: Number,
  useDifferentRepsPerRound: Boolean,
  restTimeBetweenRounds: Number,
}

const setGoals = {  // form
  setsNumber: Number,
  setsGoalType: String,
  timeGoalType: String,
  timePerSet: Number,
  setsTotalTime: Number,
  useDifferentRepsPerSet: Boolean,
  restTimeBetweenSets: Number,
}

const repGoals = {  // form
  repsNumber: Number,
  repsPerSetArray: Array(Number),
  repsPerRoundArray: Array(Number),
}

const cardioGoals = {  // form
  targetEnergyGoalType: String,
  targetEnergyMeasure: Number,
  energyUnit: String,
  targetEnergyPerSetArray: Array(Number),
  targetEnergyPerRoundArray: Array(Number),
}

const weightGoals = {  // form
  targetWeightGoalType: String,
  targetWeightMeasure: Number,
  weightUnit: String,
  targetWeightPerSetArray: Array(Number),
  targetWeightPerRoundArray: Array(Number),
}

const intensityGoals = {  // form
  targetIntensityGoalType: String,
  targetIntensityMeasure: Number,
  weightUnit: String,
  targetIntensityPerSetArray: Array(Number),
  targetIntensityPerRoundArray: Array(Number),
}

const targetGoals = {  // form
  roundGoals: roundGoals,
  setGoals: setGoals,
  repGoals: repGoals,
  cardioGoals: cardioGoals,
  weightGoals: weightGoals,
  targetIntensity: intensityGoals,
}

const action = {  // form
  showDemoVideo: Boolean,
  // playDemoVideoBeforeWorkout: Boolean,
  // playDemoVideoDuringWokrout: Boolean,
  // replayUserStream: Boolean,
  // replayUserStreamAfterWorkout: Boolean,
  // showAnalysisAfterWorkout: Boolean,
  // showTextDuringWorkout: Boolean,
  // countDown: Boolean,
  // countDownNumber: Number,
  videoRecording: Boolean,
  // userStreamTime: Number,
  pauseAtStart: Boolean,
  pauseAtEnd: Boolean,
  restTime: Number,  
  // shouldUserWorkoutAfterVideo: Boolean,
  // showGoalsDuringWokrout: Boolean,
  // showGoalsTime: Boolean,
  // showTimer: Boolean, 
}

const roundEntry = {
  entryType: String,  // roundStart, movement, roundEnd
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const podEntry = {
  entryType: String,  // podStart, round, movement, podEnd
  round: Array(roundEntry),
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const sessionEntry = {
  entryType: String,  // pod, round, movement
  pod: Array(podEntry),
  podMetadata: podMetadata,
  round: Array(roundEntry),
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const sessionStart = {
  video: video,
  action: action,
  comment: String,
}

const sessionEnd = {
  video: video,
  action: action,
  comment: String,
}

const SessionSchema = new Schema(
  {
    sessionMetadata: sessionMetadata,
    sessionStart: sessionStart,
    sessionEntryList: Array(sessionEntry),
    sessionEnd: sessionEnd,
  },
  { timestamps: true }
);

const Session = model("session", SessionSchema);

module.exports = Session;
