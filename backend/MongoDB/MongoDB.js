const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.userDb}:${process.env.passDb}@cluster0.wok9b2u.mongodb.net/?retryWrites=true&w=majority`);
  console.log("mongo connect myProject atlas")
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// module.exports = connectDB;