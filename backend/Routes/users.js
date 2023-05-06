const express = require("express");
const router = express();
const controller = require('../middleware/users')


router
    .post('/', controller.register)
    .post('/login', controller.login)
    // .delete('/logout', logout)


module.exports = router;
