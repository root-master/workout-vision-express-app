const express = require("express");
const router = express.Router();
const Movement = require("../models/Movement.schema");

router.get("/movements", (req, res) => {
    Movement.find()
    .then(movements => res.json(movements))
})

router.get("movements/:id", (req, res) => {
    Movement.findById(req.params.id)
    .then(movements => res.json(movements))
});

router.post("/movements", async (req, res) => {
    const movement = await new Movement(req.body);
    movement.save()
})



module.exports = router;
