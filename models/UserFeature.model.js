const userFeatureDB = require("../schema/UserFeature.schema");

module.exports = class userFeatureModel {
  static async findAllUserFeatures() {
    return await userFeatureDB.find({});
  }

  static async postUserFeature(newUserFeature) {
    return await userFeatureDB.create(newUserFeature);
  }

  static async findUserFeatureById(userFeatureId) {
    return await userFeatureDB.findById(userFeatureId, { _id: 0, __v: 0 });
  }

  static async findUserFeatureByUserVideoId(userVideoId) {
    return await userFeatureDB.find({"user_video_id": userVideoId});
  }

  static async deleteUserFeatureById(userFeatureId) {
    return await userFeatureDB.findByIdAndDelete(userFeatureId);
  }

  static async updateUserFeatureById(userFeature, userFeatureId) {
    return await userFeatureDB.findByIdAndUpdate(userFeatureId, userFeature, {
      strict: true,
      returnOriginal: false,
    });
  }
};
