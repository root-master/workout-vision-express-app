const { Schema, model } = require("mongoose");
const Video = require("./Video.schema");
const User = require("./User.schema");
const { Movement } = require("./MovementVideo.schema");

const roundsGoals = {
    rounds_number: Number,
    rounds_goal_type: String,
    time_goal_type: String,
    max_time_minutes: Number,
    time_per_round: Number,
    time_unit: String,
    use_different_reps_per_round: Boolean,
    use_different_weights_per_round: Boolean,
    use_different_calories_per_round: Boolean,
    rest_time_between_rounds: Number,
}

const setsGoals = {
    sets_number: Number,
    sets_goal_type: String,
    time_goal_type: String,
    max_time_minutes: Number,
    time_per_set: Number,
    time_unit: String,
    use_different_reps_per_set: Boolean,
    use_different_weights_per_set: Boolean,
    use_different_calories_per_set: Boolean,
    rest_time_between_sets: Number,
}

const repsGoals = {
    reps_number: Number,
    reps_array: Array(Number),
}

const cardioGoals = {
    calories: Number
}

const weightGoals = {
    weight: Number,
    weights_array: Number,
    weight_unit: String,
}

const targetGoals = {
    rounds_goals: roundsGoals,
    sets_goals: setsGoals,
    reps_goals: repsGoals,
    cardio_goals: cardioGoals,
    weight_goals: weightGoals,
}

const action = {
    record_video: Boolean,
    play_demo_before_workout: Boolean,
    play_demo_during_workout: Boolean,
}

const round = {
    inside_round: Boolean,
    round_id: String,
    round_name: String
}

const pod = {
    inside_pod: Boolean,
    pod_id: String,
    pod_name: String
}

const workout = {
    pod: pod,
    round: round,
    movement: Movement,
    video: Video,
    target_goals: targetGoals,
    action: action,
    comment: String,
}

const metaData = {
    session_name: String,
    created_by: String,
    fitness_dimensions: { type: Array(String), default: undefined },
    comment: String,
}

const program = {
    workout_program_name: String,
}

const Workout = {
    meta_data: metaData,
    private: Boolean,
    program: program,
    workouts: { type: Array(workout), default: undefined },
    user: User
}

const WorkoutSessionSchema = new Schema(
    Workout,
    { timestamps: true }
);

const WorkoutSession = model("workout_session", WorkoutSessionSchema);

module.exports = WorkoutSession;
