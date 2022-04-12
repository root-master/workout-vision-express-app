const userFitnessStateGoalDB = require("../schema/UserFitnessStateGoal.schema");

module.exports = class userFitnessStateGoalModel {
  static async findAllUserFitnessStateGoals() {
    return await userFitnessStateGoalDB.find({}).sort( {"createdAt": -1} );
  }

  static async postUserFitnessStateGoal(newUserFitnessStateGoal) {
    return await userFitnessStateGoalDB.create(newUserFitnessStateGoal);
  }

  static async findUserFitnessStateGoalById(userFitnessStateGoalId) {
    return await userFitnessStateGoalDB.findById(userFitnessStateGoalId, { _id: 0, __v: 0 });
  }

  static async findUserFitnessStateGoalByUserId(userId) {
    return await userFitnessStateGoalDB.find( {"user.sub": userId} ).sort( {"createdAt": -1} );
  }

  static async deleteUserFitnessStateGoalById(userFitnessStateGoalId) {
    return await userFitnessStateGoalDB.findByIdAndDelete(userFitnessStateGoalId);
  }

  static async updateUserFitnessStateGoalById(userFitnessStateGoal, userFitnessStateGoalId) {
    return await userFitnessStateGoalDB.findByIdAndUpdate(userFitnessStateGoalId, userFitnessStateGoal, {
      strict: true,
      returnOriginal: false,
    });
  }
};
