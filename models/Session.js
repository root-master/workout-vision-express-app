const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SessionSchema = new Schema(
    {
        "session_name": String,
        "display_name": String,
        "pods_list": Array(Object)
    },
    { collection: "workout_sessions" }
);

var Model = mongoose.model("session", SessionSchema, "workout_sessions");

module.exports = Session = Model;
