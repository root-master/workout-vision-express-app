const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovementSchema = new Schema(
    {
        "movement_name": String,
        "movement_display_name": String,
        "equipment_list": Array(String),
        "video_url": String,
        "video_source": String,
        "video_start_time": Number,
        "video_end_time": Number,
        "workout_category_list": Array(String),
        "workout_movements": { 
            type: mongoose.SchemaTypes.ObjectId, 
            ref: "workout_movements"
        }
    },
);

const Movement = mongoose.model("movement", MovementSchema);

module.exports = Movement;
