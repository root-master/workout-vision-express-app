const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovementSchema = new Schema({
  movementName: String,
  movementDisplayName: String,
  equipmentList: Array(String),
  videoUrl: String,
  videoSource: String,
  videoStartTime: Number,
  videoEndTime: Number,
  workoutCategoryList: Array(String),
});

const Movement = mongoose.model("movement", MovementSchema);

module.exports = Movement;
