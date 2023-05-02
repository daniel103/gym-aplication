const Users = require("../Models/users");
const JWT = require('jsonwebtoken');
const SALT_ROUNDS = 10;
const bcrypt = require('bcrypt')
const catchAsync = require('../CatchAsync/CatchAsync');

function token(user) {
    delete user.password
    return JWT.sign(user, process.env.JWT_SECRET)
}


exports.register = () =>
 catchAsync(async (req, res, next) =>  {
        const { password } = req.body;
        const salt = await bcrypt.genSalt(SALT_ROUNDS)
        const hashPassword = await bcrypt.hash(password, salt)
        req.body.password = hashPassword

        let user = await Users.create(req.body)
        const jwtToken = token(user._doc)
        res.cookie('token', jwtToken)
        res.status(200).send({
            success: 'success', data: user
        })
})


exports.login = () => 
   catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password){
        res.status(400).send("There is no email or password");
    }

    const user = await Users.findOne({ email: req.body.email });

    if(email == null) {
        res.status(400).send("Email or password invalid")
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if(!matchPassword){
        res.status(401).send("Something went wrong");
    }

    const tokenUser = token(user._doc);
    res.cookie("token", tokenUser);
    res.status(200).send({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        password: user.password,
        confirmPassword: user.confirmPassword,
        token: tokenUser,
    })
   })

exports.logout = (req, res, next) => {
    res.clearCookie("token");
    res.status(200).send({ status: "success" })
}



