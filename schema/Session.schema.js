const { Schema, model } = require("mongoose");

const sessionMetadate = {
  sessionName: String,
  workoutCategoryList: Array(String),
  personalTrainer: String,
}

const movement = {
  movementName: String,
  equipmentList: Array(String),
  workoutCategoryList: Array(String),
}

const pod = {
  podName: String,
  podID: String,
  podStart: Boolean,
  podEnd: Boolean,
  podStartComment: String,
  podEndComment: String,
}

const round = {
  roundName: String,
  roundStart: Boolean,
  roundEnd: Boolean,
  roundStartComment: String,
  roundEndComment: String,
}

roundGoals = {
  roundNmber: Number,
  roundGoalType: String,
  timeGoalType: String,
  timePerRound: Number,
  roundTotalTime: Number,
  isDifferentRepsPerRound: Boolean,
  restTimeBetweenRounds: Number
}

setGoals = {
  setsNumber: Number,
  setsGoalType: String,
  timeGoalType: String,
  timePerSet: Number,
  setsTotalTime: Number,
  isDifferentRepsPerSet: Boolean,
  restTimeBetweenSets: Number,
}

repGoals = {
  repsNumber: Number,
  repsPerSetArray: Array(Number),
  repsPerRoundArray: Array(Number),
}

cardioGoals = {
  targetEnergyGoalType: String,
  targetEnergyMeasure: Number,
  energyUnit: String,
  targetEnergyPerSetArray: Array(Number),
  targetEnergyPerRoundArray: Array(Number),
}

weightGoals = {
  targetWeightGoalType: String,
  targetWeightMeasure: Number,
  weightUnit: String,
  targetWeightPerSetArray: Array(Number),
  targetWeightPerRoundArray: Array(Number),
}

intensityGoals = {
  targetIntensityGoalType: String,
  targetIntensityMeasure: Number,
  weightUnit: String,
  targetIntensityPerSetArray: Array(Number),
  targetIntensityPerRoundArray: Array(Number),
}

goals = {
  roundGoals: roundGoals,
  setGoals: setGoals,
  repGoals: repGoals,
  cardioGoals: cardioGoals,
  weightGoals: weightGoals,
  targetIntensity: intensityGoals,
}

const video = {
  videoName: String,
  videoOwner: String,
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number
}

const action = {
  playVideo: Boolean,
  playDemoVideoBeforeWorkout: Boolean,
  playDemoVideoDuringWokrout: Boolean,
  replayUserStream: Boolean,
  replayUserStreamAfterWorkout: Boolean,
  showAnalysisAfterWorkout: Boolean,
  showTextDuringWorkout: Boolean,
  countDown: Boolean,
  countDownNumber: Number,
  streamUserVideo: Boolean,
  userStreamTime: Number,
  pauseAtTheEnd: Boolean,
  restTime: Number,  
  isUserWorkoutTime: Boolean,
  showGoalsDuringWokrout: Boolean,
  showGoalsTime: Boolean,
  showTimer: Boolean, 
}

const event = {
  eventName: String,
  eventID: String,
  pod: pod,
  round: round,
  movement: movement,
  goals: goals,
  video: video,
  action: action,
}

const SessionSchema = new Schema(
  {
    sessionMetadate: sessionMetadate,
    sessionEventList: Array(event),
  },
  { timestamps: true }
);

const Session = model("session", SessionSchema);

module.exports = Session;
