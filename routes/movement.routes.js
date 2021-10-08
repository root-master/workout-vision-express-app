const express = require("express");
const { movementController } = require("../controllers/movement.controller");
const router = express.Router();
const Movement = require("../schema/Movement.schema");

router.get("/", movementController.getMovements);

router.get("/:movementId", movementController.getMovement);

router.post("/", movementController.postMovement);

module.exports = router;
