const express = require("express");
const { userSessionController } = require("../controllers/userFeature.controller");
const router = express.Router();

router.get("/", userFeatureController.getUserFeatures);

router.get("/:userSessionId", userFeatureController.getUserFeature);

router.post("/", userFeatureController.postUserFeature);

router.delete("/:userSessionId", userFeatureController.deleteUserFeature);

router.put("/", userFeatureController.updateUserFeature);

module.exports = router;
