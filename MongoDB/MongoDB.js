const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("connect to mongoose");
    } catch (error) {
        console.log(error);
    }
}

// module.exports = connectDB;