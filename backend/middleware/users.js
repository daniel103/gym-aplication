const user = require("../Models/users");
const userFn = require("../Controllers/users");

exports.register = userFn.register(user);
exports.login = userFn.login(user);