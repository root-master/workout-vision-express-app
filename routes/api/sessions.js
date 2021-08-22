const express = require("express");
const router = express.Router();
const Session = require("../../models/Session");

router.get("/", (req, res) => {
    Session.find()
    .then(sessions => res.json(sessions))
});

router.get("/:_id", (req, res) => {
    Session.findById(req.params._id)
    .then(sessions => res.json(sessions))
});


module.exports = router;
