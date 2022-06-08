const express = require("express");
const { MovementVideoController } = require("../controllers/MovementVideo.controller");
const router = express.Router();

router.get("/", MovementVideoController.getPublicMovementVideos);

router.get("/:movementVideoId", MovementVideoController.getMovementVideo);

router.post("/", MovementVideoController.postMovementVideo);

router.delete("/:movementVideoId", MovementVideoController.deleteMovementVideo);

router.put("/", MovementVideoController.updateMovementVideo);

module.exports = router;
