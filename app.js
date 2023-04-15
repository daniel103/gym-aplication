require('dotenv').config();
const express = require('express');
const app = express()
const PORT = process.env.PORT || 5000;
// const mongoose = require('./MongoDB/MongoDB');
const {connectDB} = require('./MongoDB/MongoDB')
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser())

// mongoose();
connectDB()
app.use(express.json())

app.use('/user', require('./Routes/users'))

app.listen(PORT, () => {
    console.log(`running on port http://localhost:${PORT}`)
})

