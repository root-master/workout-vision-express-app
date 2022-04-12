const { Schema, model } = require("mongoose");

const bodyPhysicalMeasurement = {
    age: Number,
    gender: Number,
    weight: Number,
    weight_unit: Number,
    height: Number,
    height_unit: Number
}

const weightGoals = {
    weight_goal: String,
    target_weight: Number,
    weight_unit: Number,
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
    pose: Number,
    diet: Number,
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
}

const activity = {
    num_sessions_per_week: Number,
    num_hours_per_week: Number,
    activity_level: Number,
    workout_intensity_level: Number,
}

const userFitnessStateGoal = {
    body_physical_measurement: bodyBasicPhysicalMeasurement,
    weight_goals: weightGoals,
    current_fitness_level: currentFitnessLevel,
    fitness_goals: fitnessGoals,
    current_pain_level: painAreaLevel,
    current_strength_level: StrenghtAreaLevel,
    target_strength_level: StrenghtAreaLevel,
    current_mobility_level: mobilityAreaLevel,
    target_mobility_level: mobilityAreaLevel,
    current_activity: activity,
    target_activity: activity
}

const UserFitnessStateGoalSchema = new Schema(
    userFitnessStateGoal,
    { timestamps: true }
);

const UserFitnessStateGoal = model("user_fitness_state_goal", UserFitnessStateGoalSchema);

module.exports = UserFitnessStateGoal;