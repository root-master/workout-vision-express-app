const express = require("express");
const { movementController } = require("../controllers/movement.controller");
const router = express.Router();

router.get("/", movementController.getMovements);

router.get("/:movementId", movementController.getMovement);

router.post("/", movementController.postMovement);

router.delete("/:movementId", movementController.deleteMovement);

router.put("/", movementController.updateMovement);

module.exports = router;
