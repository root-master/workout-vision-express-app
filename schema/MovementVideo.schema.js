const Video = require("./Video.schema");
const User = require("./User.schema");

const req = require("express/lib/request");
const { Schema, model } = require("mongoose");
const Joi = require("joi");


const movement = {
    movement_name: String,
    equipments: { type: Array(String), default: undefined },
    body_parts: { type: Array(String), default: undefined },
    fitness_dimensions: { type: Array(String), default: undefined },
}

const movement_video = {
    movement: movement,
    video: Video,
    user: User,
    private: Boolean
}

const MovementVideoSchema = new Schema(
    movement_video,
    { timestamps: true }
);

const MovementVideo = model("movement_video", MovementVideoSchema);

module.exports = MovementVideo;

