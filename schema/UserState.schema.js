const { Schema, model } = require("mongoose");

const mobility_level = {
    neck_head:
    {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        left_lateral_bending: { angle: Number, level: Number },
        right_lateral_bending: { angle: Number, level: Number },
        left_axial_rotation: { angle: Number, level: Number },
        right_axial_rotation: { angle: Number, level: Number },
    },
    left_hip: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        abduction: { angle: Number, level: Number },
        adduction: { angle: Number, level: Number },
        external_rotation: { angle: Number, level: Number },
        internal_rotation: { angle: Number, level: Number },
    },
    right_hip: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        abduction: { angle: Number, level: Number },
        adduction: { angle: Number, level: Number },
        external_rotation: { angle: Number, level: Number },
        internal_rotation: { angle: Number, level: Number },
    },
    right_ankle: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        pronation: { angle: Number, level: Number },
        supination: { angle: Number, level: Number },
        shank_internal_rotation: { angle: Number, level: Number },
        shank_external_rotation: { angle: Number, level: Number },
    },
    left_ankle: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        pronation: { angle: Number, level: Number },
        supination: { angle: Number, level: Number },
        shank_internal_rotation: { angle: Number, level: Number },
        shank_external_rotation: { angle: Number, level: Number },
    },
    left_elbow: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        pronation: { angle: Number, level: Number },
        supination: { angle: Number, level: Number },
    },
    right_elbow: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        pronation: { angle: Number, level: Number },
        supination: { angle: Number, level: Number },
    },
    right_wrist: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        ulnar_deviation: { angle: Number, level: Number },
        radial_deviation: { angle: Number, level: Number },
        left_rotation: { angle: Number, level: Number },
        right_rotation: { angle: Number, level: Number },
    },
    left_wrist: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        ulnar_deviation: { angle: Number, level: Number },
        radial_deviation: { angle: Number, level: Number },
        left_rotation: { angle: Number, level: Number },
        right_rotation: { angle: Number, level: Number },
    },
    left_knee: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
    },
    right_knee: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
    },
    spine: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        left_lateral_tilt: { angle: Number, level: Number },
        right_lateral_tilt: { angle: Number, level: Number },
        left_axial_rotation: { angle: Number, level: Number },
        right_axial_rotation: { angle: Number, level: Number },
    },
    left_shoulder: {
        extension: { angle: Number, level: Number },
        flexion: { angle: Number, level: Number },
        abduction: { angle: Number, level: Number },
        adduction: { angle: Number, level: Number },
        medial_rotation: { angle: Number, level: Number },
        lateral_rotation: { angle: Number, level: Number },
    }
}

const userState = {
    timestamp: Date,
    state_name: String,
    state_type: String,
    comment: String,
    body_physical_measurements: {
        date_of_birth: Number,
        gender: String,
        weight: Number,
        weight_unit: String,
        // left_scale_weight: Number,
        // right_scale_weight: Number,
        height: Number,
        height_unit: String,
        // tall_on_heels_height: Number,
        // BMI: Number,
        // BMI_unit: String,
    },
    body_health_issues: {
        pain: mobility_level,
        weakness: Object,
        mobility_issues: mobility_level,
        desease: Object,
    },
    body_fitness_levels: {
        mobility: mobility_level,
        strength: Object,
        endurance: Object,
        balance: Object,
        flexibility: Object,
        agility: Object,
        pose: {
            standing: Object,
            sitting: Object,
            squatting: Object
        }
    },
    mental_health: {
        down_level: Number,
        hyper_level: Number,
        happiness_level: Number,
        energy_level: Number,
        stress_level: Number,
        anxiety_level: Number,
        feeling_about_yourself: Number,
    },
};

const UserStateSchema = new Schema(
    userState,
    { timestamps: true }
);

const UserState = model("user_state", UserStateSchema);

module.exports = UserState;