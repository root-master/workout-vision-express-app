const { Schema, model } = require("mongoose");

const bodyPhysicalMeasurement = {
    age: Number,
    gender: String,
    weight: Number,
    weight_unit: String,
    height: Number,
    height_unit: String
}

const weightGoals = {
    weight_goal: String,
    target_weight: Number,
    weight_unit: String,
}

const currentFitnessLevel = {
    strength: Number,
    mobility: Number,
    endurance: Number,
    stability: Number,
    flexibility: Number,
    cardio: Number,
    agility: Number,
    core_strength: Number,
    energy_level: Number,
    pose_quality: Number,
    diet_quality: Number,
}

const fitnessGoals = {
    strength: Number,
    mobility: Number,
    endurance: Number,
    stability: Number,
    flexibility: Number,
    cardio: Number,
    agility: Number,
    core_strength: Number,
    energy_level: Number,
    pain_relief: Number,
    rehabilaton: Number,
    pose_correction: Number,
    diet: Number
}

const painAreaLevel = {
    neck: Number,
    right_shoulder: Number,
    right_elbow: Number,
    right_wrist: Number,
    right_hand: Number,
    right_hand_fingers: Number,
    right_hip: Number,
    right_knee: Number,
    right_ankle: Number,
    left_shoulder: Number,
    left_elbow: Number,
    left_wrist: Number,
    left_hand: Number,
    left_hand_fingers: Number,
    left_hip: Number,
    left_knee: Number,
    left_ankle: Number,
    lower_back: Number,
    mid_back: Number,
    upper_back: Number,
    ribs: Number,
}

const mobilityAreaLevel = {
    neck: Number,
    right_shoulder: Number,
    right_elbow: Number,
    right_wrist: Number,
    right_hand_fingers: Number,
    right_hip: Number,
    right_knee: Number,
    right_ankle: Number,
    left_shoulder: Number,
    left_elbow: Number,
    left_wrist: Number,
    left_hand_fingers: Number,
    left_hip: Number,
    left_knee: Number,
    left_ankle: Number,
    lower_back_spine: Number,
    mid_back_spine: Number,
    upper_back_spine: Number,
}

const StrenghtAreaLevel = {
    legs: Number,
    knees: Number,
    ankles: Number,
    arms: Number,
    shoulders: Number,
    wrists: Number,
    chest: Number,
    abs: Number,
    lower_back: Number,
    upper_back: Number,
    butt_hips: Number,
    legs_thighs: Number,
    legs_calves: Number,
}

const activity = {
    num_workout_days_per_week: Number,
    num_hours_per_workout_day: Number,
    workout_intensity_level: Number,
    workout_difficulty_level: Number,
}

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
};

const availableEquipments = {
    "home": { type: Array, default: undefined },
    "gym": { type: Array, default: undefined }
}


const userFitnessStateGoal = {
    user: user,
    body_physical_measurement: bodyPhysicalMeasurement,
    weight_goals: weightGoals,
    current_fitness_level: currentFitnessLevel,
    target_fitness_goals_level: fitnessGoals,
    current_pain_level: painAreaLevel,
    current_strength_level: StrenghtAreaLevel,
    target_strength_level: StrenghtAreaLevel,
    current_mobility_level: mobilityAreaLevel,
    target_mobility_level: mobilityAreaLevel,
    current_activity: activity,
    target_activity: activity,
    available_equipments: availableEquipments,
}

const UserFitnessStateGoalSchema = new Schema(
    userFitnessStateGoal,
    { timestamps: true }
);

const UserFitnessStateGoal = model("user_fitness_state_goal", UserFitnessStateGoalSchema);

module.exports = UserFitnessStateGoal;