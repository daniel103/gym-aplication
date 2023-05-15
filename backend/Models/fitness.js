const {Model, Schema} = require("mongoose");

const workout = new Schema ({
    muscle: {
        type: String,
        required : [true, "muscle is required"]
    },
    exercise: {
        type: String,
        required : [true, "exercise is required"]
    },
    Rehearsals: {
        type: String,
        required : [true, "Rehearsals is required"]
    },
    sets: {
        type: String,
        required : [true, "sets is required"]
    },
    setTime: {
        type: new Date,
        required : [true, "time set is required"]
    },
    restTime: {
        type: new Date,
        required : [true, "time is required"]
    }
})

const fitness = Model("workout", workout);
module.exports = fitness;