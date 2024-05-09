const userModel = require("../models/user.model");
const bcrptjs = require("bcryptjs");

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const resp = await userModel.find();
    res.json({
      code: 200,
      statusText: "OK",
      message: "All Users",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: 404,
      statusText: "",
      message: err.message,
    });
  }
};

// Create a User
const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const checkIfUserEmailExist = await userModel.findOne({ email });
    if (checkIfUserEmailExist) {
      res.json({
        code: 404,
        message: "User Email Already Exists",
      });
      return;
    }
    const encryptPassword = await bcrptjs.hash(password, 12);
    const createUser = new userModel({
      first_name,
      last_name,
      phone,
      email,
      password: encryptPassword,
    });
    const resp = await createUser.save();
    res.status(200).json({
      code: 200,
      statusText: "OK",
      message: "User Created Successfully",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      code: 404,
      statusText: "",
      message: err.message,
    });
  }
};

// Updating a user
const updateUser = async (req, res) => {
  try {
    const newUser = req.body;
    const id = req.params.id;
    const resp = await userModel.findByIdAndUpdate(id, newUser, { new: true });
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "User updated successfully",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      statusCode: 404,
      statusText: "",
      message: err.message,
    });
  }
};

// Deleting a user
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await userModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "User Deleted Successfully",
      data: resp,
    });
  } catch (err) {
    console.log(err);
    res.json({
      statusCode: 404,
      statusText: "",
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resp = await userModel.findOne({ email });
    if (!resp) {
      res.json({
        code: 404,
        message: "Invalid Credentials",
      });
      return;
    }
    const isMatch = await bcrptjs.compare(password, resp.password);
    if (!isMatch) {
      res.json({
        code: 404,
        message: "Invalid Email or Password",
      });
      return;
    }
    res.json({
      code: 200,
      message: "Login Successful",
      data: resp,
    });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser, loginUser };
