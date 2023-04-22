const {Schema, model} = require("mongoose");

const userSchema = new Schema ({
    firstName: {
        type: String,
        required: [true, "Please enter your first name"]
    }, 
    lastName: {
        type: String,
        required: [true, "Please enter your last name"]
    },
    username: {
        type: String,
        required: [true, "Please enter your userName"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    password: {
        type: String,
        required: [true, "please enter your password"],
    },
    confirmPassword: {
        type: String,
        required: [true, "please enter your password again"]
    }
});

const User = model("user", userSchema);
module.exports = User; 