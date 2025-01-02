const userModel = require("../models/user.model");
const userServices = require("../services/user.service");
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, lastname, email, password } = req.body;
  const hashPassword = await userModel.hashPassword(password);
  const user = await userServices.createUser({
    firstname:fullname.firstname,
    lastname:fullname.lastname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  res
    .status(201)
    .json({ message: "User created successfully", token: token, user });
};
