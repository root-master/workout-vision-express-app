const express = require("express");
const { userFeatureController } = require("../controllers/userFeature.controller");
const router = express.Router();

router.get("/", userFeatureController.getUserFeatures);

router.get("/:userFeatureId", userFeatureController.getUserFeature);

router.get("/user_video_id/:userVideoId", userFeatureController.getUserFeatureByUserVideoID);

router.post("/", userFeatureController.postUserFeature);

router.delete("/:userFeatureId", userFeatureController.deleteUserFeature);

router.put("/", userFeatureController.updateUserFeature);

module.exports = router;
