const Users = require("../Models/users");
const JWT = require('jsonwebtoken');
const SALT_ROUNDS = 10;
const bcrypt = require('bcrypt')
const catchAsync = require('../CatchAsync/CatchAsync')

function token(user) {
    delete user.password
    return JWT.sign(user, process.env.JWT_SECRET)
}

exports.register = () =>  {
    catchAsync(async (req, res, next) => {
        const { password, confirmPassword } = req.body;
        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        const hashPassword = await bcrypt.hash(password, confirmPassword, salt)
        req.body.password = hashPassword

        const user = await Users.create(req.body)

        const jwtToken = token(user._doc)
        res.cookie('token', jwtToken)

        res.status(200).send({
            success: 'success', data: jwtToken
        })
    })
}

