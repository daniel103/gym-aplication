const express = require("express");
const router = express();
const {register} = require('../Controllers/users')

router
    .post('/register', register)


module.exports = router
