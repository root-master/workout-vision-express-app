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
    weight_change_goal: String,
    pace_of_change: String,
    body_fat_goal: String,
    muscle_mass_goal: String,
    target_weight: Number,
    weight_unit: String,
}

const healthCalculations = {
    BMI: Number,
    BMR: Number,
    min_healthy_weight: Number,
    max_healthy_weight: Number,
    ideal_weight: Number,
    weight_unit: String,
}

const currentFitnessLevel = {
    overall: Number,
    strength: Number,
    mobility: Number,
    endurance: Number,
    cardio: Number,
    stability: Number,
    flexibility: Number,
    agility: Number,
    pain: Number
}

const targetFitnessLevel = {
    strength: Number,
    mobility: Number,
    endurance: Number,
    cardio: Number,
    stability: Number,
    flexibility: Number,
    agility: Number,
    rehabilitation: Number
}

const painLevel = {
    neck: Number,
    shoulders: Number,
    wrists: Number,
    hips: Number,
    knees: Number,
    ankles: Number,
    chest: Number,
    lower_back: Number,
    upper_back: Number
}

const mobilityLevel = {
    neck: Number,
    shoulders: Number,
    wrists: Number,
    hips: Number,
    knees: Number,
    ankles: Number,
    chest: Number,
    spine: Number
}

const strenghtLevel = {
    legs: Number,
    arms: Number,
    abs: Number,
    chest: Number,
    back: Number,
    shoulders: Number
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
    "gym": { type: Array, default: undefined },
    "travel": { type: Array, default: undefined },
}


const userFitnessStateGoal = {
    user: user,
    body_physical_measurement: bodyPhysicalMeasurement,
    weight_goals: weightGoals,
    health_calculations: healthCalculations,
    current_fitness_level: currentFitnessLevel,
    target_fitness_level: targetFitnessLevel,
    current_pain_level: painLevel,
    target_rehabilitation_level: painLevel,
    current_strength_level: strenghtLevel,
    target_strength_level: strenghtLevel,
    current_mobility_level: mobilityLevel,
    target_mobility_level: mobilityLevel,
    available_equipments: availableEquipments,
}

const UserFitnessStateGoalSchema = new Schema(
    userFitnessStateGoal,
    { timestamps: true }
);

const UserFitnessStateGoal = model("user_fitness_state_goal", UserFitnessStateGoalSchema);

module.exports = UserFitnessStateGoal;