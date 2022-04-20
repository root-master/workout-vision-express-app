const { Schema, model } = require("mongoose");

const userAction = {
    timestamp_start: Date,
    timestamp_end: Date,
    action_name: String,
    action_type: String,
    comment: String,
    workout: {
        workout_intesity: Number,
        workout_duration_hours: Number,
        avg_heart_rate: Number,
        calories_burnt: Number,
        steps: Number,
        miles: Number,
        workout_categories_time_distribution: Object
    },
    sleep: {
        sleep_quality: Number,
        num_sleep_hours: Number,
    },
    diet: {
        calories: Number,
        fat_grams: Number,
        protein_grams: Number,
        carbs_grams: Number,
        fiber_grams: Number,
    },
    hydration: {
        water_consumption_litres: Number,
        hydration_level: Number,
    },
    work: {
        work_hours: Number,
        productivity_level: Number,
        rest_hours: Number,
        productive_hours: Number,
        frustration_hours: Number,
        stress_hours: Number,
        sitting_hours: Number,
        standing_hours: Number,
        stress_level: Number,
        work_from_home_hours: Number,
        work_from_office_hours: Number,
        driving_hours: Number,
        commute_hours: Number,
        meeting_hours: Number,
    },
    art_hobby:{
        hours: Number,
        feeling: Number
    },
    alone_time: {
        hours: Number,
        feeling_about_yourself: Number
    },
    relationship: {
        together_hours: Number,
        relationship_quality: Number,
        intimacy_level: Number,
        feeling_about_yourself: Number,
        feeling_about_your_partner: Number,
        feeling_about_your_relationship: Number
    },
    socialization: {
        socialization_quality: Number,
        feeling_about_yourself: Number,
        feeling_about_your_friends: Number,
        feeling_about_your_friendships: Number
    },
    family: {
        relationship_quality: Number,
        feeling_about_yourself: Number,
        feeling_about_your_family: Number,
    },
    porn_and_masturbation: {
        porn_hours: Number,
        masturbation_hours: Number,
        feeling_about_yourself: Number,
    },
    drug_use: {
        num_coffee_cups: Number,
        num_alcohol_cups: Number,
        num_cigarettes: Number,
        num_weed_joints: Number,
    },
}

const UserActionSchema = new Schema(
    userAction,
    { timestamps: true }
);

const UserAction = model("user_action", UserActionSchema);

module.exports = UserAction;
