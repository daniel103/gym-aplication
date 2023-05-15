const {model, Schema} = require("mongoose");

const addMuscle = new Schema ({
    muscle: {
        type: String,
        required : [true, "muscle is required"]
    },
    exercise: {
        type: String,
        required : [true, "exercise is required"]
    }
    })

const Muscle = model("muscle", addMuscle);
module.exports = Muscle;