const Video = require("./Video.schema");
const User = require("./User.schema");
const { Schema, model } = require("mongoose");


const Movement = {
    movement_name: String,
    equipments: { type: Array(String), default: undefined },
    body_parts: { type: Array(String), default: undefined },
    fitness_dimensions: { type: Array(String), default: undefined },
    difficulty: String
}

const movement_video = {
    movement: Movement,
    video: Video,
    user: User,
    private: Boolean
}

const MovementVideoSchema = new Schema(
    movement_video,
    { timestamps: true }
);

const MovementVideo = model("movement_video", MovementVideoSchema);

module.exports = { MovementVideo, Movement };

