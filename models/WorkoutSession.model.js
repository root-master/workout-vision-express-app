const WorkoutSessionDB = require("../schema/WorkoutSession.schema");

module.exports = class WorkoutSessionModel {
  static async findAllWorkoutSessions() {
    return await WorkoutSessionDB.find({});
  }

  static async postWorkoutSession(newWorkoutSession) {
    return await WorkoutSessionDB.create(newWorkoutSession);
  }

  static async findWorkoutSessionById(workoutSessionId) {
    return await WorkoutSessionDB.findById(workoutSessionId, { _id: 0, __v: 0 });
  }

  static async deleteWorkoutSessionById(workoutSessionId) {
    return await WorkoutSessionDB.findByIdAndDelete(workoutSessionId);
  }

  static async updateWorkoutSessionById(session, workoutSessionId) {
    return await WorkoutSessionDB.findByIdAndUpdate(workoutSessionId, session, {
      strict: true,
      returnOriginal: false,
    });
  }
};
