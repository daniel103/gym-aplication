require("dotenv").config();
const express = require("express");
const app = express();
const MongoDB = require("./MongoDB/MongoDB");

MongoDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT , () => console.log(`app on PORT ${PORT}`));