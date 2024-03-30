const express = require("express");
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser, loginUser } = require("../controllers/user.controller");

router.post("/", createUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
