const express = require("express");
const router = express();

const {addMuscle, deleteMuscle} = require("../Controllers/addMuscle");

router
    .post("/", addMuscle)
    .delete("/", deleteMuscle)

module.exports = router;