const adminModel = require("../models/admin.model");
const bcrptjs = require("bcryptjs");

// Get All Admin
const getAllAdmin = async (req, res) => {
  try {
    const resp = await adminModel.find();
    res.json({
      code: 200,
      statusText: "OK",
      message: "All Admin",
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

// Create a Admin
const createAdmin = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    const checkIfAdminEmailExist = await adminModel.findOne({ email });
    if (checkIfAdminEmailExist) {
      res.json({
        code: 404,
        message: "Admin Email Already Exists",
      });
      return;
    }
    const encryptPassword = await bcrptjs.hash(password, 12);
    const createAdmin = new adminModel({
      first_name,
      last_name,
      email,
      phone,
      password: encryptPassword,
    });
    const resp = await createAdmin.save();
    res.status(200).json({
      code: 200,
      statusText: "OK",
      message: "Admin Created Successfully",
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

// Updating a Admin
const updateAdmin = async (req, res) => {
  try {
    const newAdmin = req.body;
    const id = req.params.id;
    const resp = await adminModel.findByIdAndUpdate(id, newAdmin, { new: true });
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Admin updated successfully",
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

// Deleting a Admin
const deleteAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const resp = await adminModel.findByIdAndDelete(id);
    res.json({
      statusCode: 200,
      statusText: "OK",
      message: "Admin Deleted Successfully",
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

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const resp = await adminModel.findOne({ email });
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

module.exports = { getAllAdmin, createAdmin, updateAdmin, deleteAdmin, loginAdmin };
