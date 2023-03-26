const {Schema, Model, model} = require("mongoose");

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    }, 
    lastName: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    userName: {
        type: String,
        required: [true, "Please enter your userName"]
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
    }
});

const User = model("user", userSchema);
module.exports = User; 