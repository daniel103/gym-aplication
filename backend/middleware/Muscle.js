const addMuscle = require("../Models/addMuscle");
const addMuscleFn = require("../Controllers/addMuscle");

exports.AddMuscle = addMuscleFn.createMuscle(addMuscle);
exports.AddMuscle = addMuscleFn.deleteMuscle(addMuscle);