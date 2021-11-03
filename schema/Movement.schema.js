const { Schema, model } = require("mongoose");

const MovementSchema = new Schema(
  {
    movementName: {
      type: String,
      unique: true,
    },
    movementDisplayName: {
      type: String,
      unique: true,
    },
    equipmentList: Array(String),
    videoUrl: String,
    videoSource: String,
    videoStartTime: Number,
    videoEndTime: Number,
    workoutCategoryList: Array(String),
  },
  { timestamps: true }
);

const Movement = model("movement", MovementSchema);

module.exports = Movement;
