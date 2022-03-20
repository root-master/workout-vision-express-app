const { userFeatureSchemaValidation } = require("../helpers/userFeatureSchemaValidation");
const userFeatureModel = require("../models/UserFeature.model");
const createHttpError = require("http-errors");
const omit = require("lodash/omit");

exports.userFeatureController = {
  getUserFeatures: async (req, res, next) => {
    try {
      const allUserFeatures = await userFeatureModel.findAllUserFeatures();
      res.status(202).json({ allUserFeatures });
    } catch (error) {
      next(error);
    }
  },
  postUserFeature: async (req, res, next) => {
    try {
      const userFeatureData = await userFeatureSchemaValidation().validateAsync(
        req.body,
        {
          abortEarly: true,
        }
      );
      const newUserFeature = await userFeatureModel.postUserFeature(userFeatureData);
      res.status(201).json({ newUerFeatureData: newUserFeature });
    } catch (error) {
      if (error.isJoi) {
        next(createHttpError.BadRequest(error.message));
      } else {
        next(error);
      }
    }
  },
  getUserFeature: async (req, res, next) => {
    try {
      const { userFeatureId } = req.params;
      if (!userFeatureId)
        throw createHttpError.BadRequest("userFeature ID not found");
      const userFeature = await userFeatureModel.findUserFeatureById(userFeatureId);
      if (!userFeature) throw createHttpError.NotFound("userFeature Not Found");
      res.status(200).json({ success: true, userFeature });
    } catch (error) {
      next(error);
    }
  },
  deleteUserFeature: async (req, res, next) => {
    try {
      const { userFeatureId } = req.params;
      if (!userFeatureId)
        throw createHttpError.BadRequest("userFeature ID not found");
      const deletedUserFeature = await userFeatureModel.deleteUserFeatureById(userFeatureId);
      res.status(200).json({ deletedUserFeature });
      s;
    } catch (error) {
      next(error);
    }
  },
  updateUserFeature: async (req, res, next) => {
    try {
      const { userFeature: formUserFeature, userFeatureId } = req.body;
      const userFeature = await userFeatureSchemaValidation().validateAsync(
        omit(formUserFeature, ["createdAt", "updatedAt"])
      );
      const updatedUserFeature = await userFeatureModel.updateUserFeatureById(
        userFeature,
        userFeatureId
      );
      if (!updatedUserFeature)
        throw createHttpError.NotFound("userFeature Not Found");
      res.status(200).json({ updatedUserFeature });
    } catch (error) {
      next(error);
    }
  },
};
