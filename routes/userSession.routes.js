const express = require("express");
const { userSessionController } = require("../controllers/userSession.controller");
const router = express.Router();

router.get("/", userSessionController.getUserSessions);

router.get("/:userSessionId", userSessionController.getUserSession);

router.post("/", userSessionController.postUserSession);

router.delete("/:userSessionId", userSessionController.deleteUserSession);

router.put("/", userSessionController.updateUserSession);

module.exports = router;
