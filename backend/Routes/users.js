const express = require("express");
const router = express();
const {register, login, logout} = require('../Controllers/users')

router
    .post('/register', register)
    .post('/login', login)
    .delete('/logout', logout)


module.exports = router
