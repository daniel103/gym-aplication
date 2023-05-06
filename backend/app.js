require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
const {connectDB} = require('./MongoDB/MongoDB');
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(cors());
app.use(cookieParser());

connectDB();
app.use(express.json());

app.use('/user', require('./Routes/users'))

// app.get("/",(req, res) => {
//     res.send("hey")
// })
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})

