require('dotenv').config();
require('./MongoDB/MongoDB');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.use('/user', require('./Routes/users'));
app.use("/AddMuscle", require("./Routes/addMuscle"));
// app.get("/",(req, res) => {
//     res.send("hey")
// })
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})

