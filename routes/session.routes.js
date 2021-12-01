const express = require("express");
const { sessionController } = require("../controllers/session.controller");
const router = express.Router();

router.get("/", sessionController.getSessions);

router.get("/:sessionId", sessionController.getSession);

router.post("/", sessionController.postSession);

router.delete("/:sessionId", sessionController.deleteSession);

router.put("/", sessionController.updateSession);

module.exports = router;
