const add = require("../Models/addMuscle");
const catchAsync = require('../CatchAsync/CatchAsync');


exports.addMuscle = async (req, res) => {
    try {
        const data = await add.create(req.body);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMuscle = async (req, res) =>{
    try {
        const data = await add.deleteOne(req.params._id);
        res.send(data)
    } catch (error) {
        console.log(error)
    }
} 
