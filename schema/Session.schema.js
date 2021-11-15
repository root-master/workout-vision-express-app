const { Schema, model } = require("mongoose");

const video = {
  videoName: String,
  // videoOwner: String,
  // personInVideo: String,
  // personType: String,
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number
}

const movement = {
  movementName: String,
  equipmentList: Array(String),
  workoutCategoryList: Array(String),
}

const sessionMetadata = {
  sessionName: String,
  workoutCategoryList: Array(String),
}

const podMetadata = {
  podName: String,
  workoutCategoryList: Array(String),
}

const roundGoals = {
  roundNmber: Number,
  roundGoalType: String,
  timeGoalType: String,
  timePerRound: Number,
  roundTotalTime: Number,
  useDifferentRepsPerRound: Boolean,
  restTimeBetweenRounds: Number
}

const setGoals = {
  setsNumber: Number,
  setsGoalType: String,
  timeGoalType: String,
  timePerSet: Number,
  setsTotalTime: Number,
  useDifferentRepsPerSet: Boolean,
  restTimeBetweenSets: Number,
}

const repGoals = {
  repsNumber: Number,
  repsPerSetArray: Array(Number),
  repsPerRoundArray: Array(Number),
}

const cardioGoals = {
  targetEnergyGoalType: String,
  targetEnergyMeasure: Number,
  energyUnit: String,
  targetEnergyPerSetArray: Array(Number),
  targetEnergyPerRoundArray: Array(Number),
}

const weightGoals = {
  targetWeightGoalType: String,
  targetWeightMeasure: Number,
  weightUnit: String,
  targetWeightPerSetArray: Array(Number),
  targetWeightPerRoundArray: Array(Number),
}

const intensityGoals = {
  targetIntensityGoalType: String,
  targetIntensityMeasure: Number,
  weightUnit: String,
  targetIntensityPerSetArray: Array(Number),
  targetIntensityPerRoundArray: Array(Number),
}

const targetGoals = {
  roundGoals: roundGoals,
  setGoals: setGoals,
  repGoals: repGoals,
  cardioGoals: cardioGoals,
  weightGoals: weightGoals,
  targetIntensity: intensityGoals,
}

const action = {
  playVideo: Boolean,
  // playDemoVideoBeforeWorkout: Boolean,
  // playDemoVideoDuringWokrout: Boolean,
  // replayUserStream: Boolean,
  // replayUserStreamAfterWorkout: Boolean,
  // showAnalysisAfterWorkout: Boolean,
  // showTextDuringWorkout: Boolean,
  // countDown: Boolean,
  // countDownNumber: Number,
  streamUserVideo: Boolean,
  // userStreamTime: Number,
  pauseAtStart: Boolean,
  pauseAtEnd: Boolean,
  // restTime: Number,  
  // shouldUserWorkoutAfterVideo: Boolean,
  // showGoalsDuringWokrout: Boolean,
  // showGoalsTime: Boolean,
  // showTimer: Boolean, 
}

const roundEntry = {
  entryType: String,  // roundStart, movementInsideRound, roundEnd
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const podEntry = {
  entryType: String,  // podStart, roundInsidePod, movementInsidePod, podEnd
  round: Array(roundEntry),
  podMetadata: podMetadata,
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const sessionEntry = {
  entryType: String,  // pod, round, movement
  pod: Array(podEntry),
  round: Array(roundEntry),
  movement: movement,
  targetGoals: targetGoals,
  video: video,
  action: action,
  comment: String,
}

const sessionStart = {
  sessionMetadata: sessionMetadata,
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
    sessionStart: sessionStart,
    sessionItemsList: Array(sessionEntry),
    sessionEnd: sessionEnd,
  },
  { timestamps: true }
);

const Session = model("session", SessionSchema);

module.exports = Session;
