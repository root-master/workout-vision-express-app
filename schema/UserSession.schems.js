const { Schema, model } = require("mongoose");

const movement = {
    movementName: String,
    equipmentList: Array(String),
    workoutCategoryList: Array(String),
    videoUrl: String,
    videoSource: String,
    videoStartTime: Number,
    videoEndTime: Number
};

const userVideo = {
    bucket: String,
    key: String,
};

const user = {
    email: String,
    email_verified: Boolean,
    family_name: String,
    given_name: String,
    locale: String,
    name: String,
    nickname: String,
    picture: String,
    sub: String,
    updated_at: String
};

const roundsGoals = {
    roundsNmber: Number,
    roundsGoalType: String,
    timeGoalType: String,
    timePerRound: Number,
    roundsTotalTime: Number,
    timeUnit: String,
    useDifferentRepsPerRound: Boolean,
    restTimeBetweenRounds: Number,
}

const setsGoals = {
    setsNumber: Number,
    setsGoalType: String,
    timeGoalType: String,
    timePerSet: Number,
    setsTotalTime: Number,
    timeUnit: String,
    useDifferentRepsPerSet: Boolean,
    restTimeBetweenSets: Number,
}

const repsGoals = {
    repsNumber: Number,
    repsPerSetArray: Array(Number),
    repsPerRoundArray: Array(Number),
}

const cardioGoals = {
    targetEnergyMeasure: Number,
    energyUnit: String,
    targetEnergyPerSetArray: Array(Number),
    targetEnergyPerRoundArray: Array(Number),
}

const weightGoals = {
    targetWeightMeasure: Number,
    weightUnit: String,
    targetWeightPerSetArray: Array(Number),
    targetWeightPerRoundArray: Array(Number),
}

const intensityGoals = {
    targetIntensityMeasure: Number,
    targetIntensityPerSetArray: Array(Number),
    targetIntensityPerRoundArray: Array(Number),
}

const targetGoals = {
    roundsGoals: roundsGoals,
    setsGoals: setsGoals,
    repsGoals: repsGoals,
    cardioGoals: cardioGoals,
    weightGoals: weightGoals,
    intensityGoals: intensityGoals,
}

const sessionState = {
    setNumber: Number,
    roundNumber: Number
}

const userSession = {
    movement: movement,
    user: user,
    user_video: userVideo,
    user_session_id: String,
    timestamp_start: Number,
    timestamp_end: Number,
    target_goals: targetGoals,
    session_state: sessionState
};

const UserSessionSchema = new Schema(
    userSession,
    { timestamps: true }
);

const UserSession = model("user_session", UserSessionSchema);

module.exports = UserSession;
